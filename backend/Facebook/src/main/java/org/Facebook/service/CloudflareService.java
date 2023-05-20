package org.Facebook.service;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.security.MessageDigest;
import java.util.Base64;
import java.util.Objects;

@Service
public class CloudflareService {
    @Autowired
    private Environment environment;
    public String download(String file) {
        try {
            // URL to GET from
            String serverUrl = environment.getProperty("cdn.url") + file;

            // Request header
            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Custom-Auth-Key", environment.getProperty("cdn.key"));

            // Check if the file actually exists on the server
            try {
                new RestTemplate().exchange(serverUrl, HttpMethod.HEAD, new HttpEntity<>("", headers), String.class);
            } catch (HttpClientErrorException e) {
                e.printStackTrace();
                // File doesn't exist on the server
                return "";
            }

            // Make the GET request
            ResponseEntity<byte[]> responseEntity = new RestTemplate().exchange(serverUrl, HttpMethod.GET, new HttpEntity<>("", headers), byte[].class);
            if (responseEntity.getBody() != null)
                return Base64.getEncoder().encodeToString(responseEntity.getBody());
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
        return "";
    }

    public String upload(MultipartFile file) throws Exception {
        try {
            // It should be checked in front-end that the file is not larger than the limit set in properties file,
            // otherwise the server resets the connection

            String filename = Base64.getUrlEncoder().encodeToString(MessageDigest.getInstance("SHA-256").digest(file.getBytes())) + "." + FilenameUtils.getExtension(file.getOriginalFilename());

            // URL to PUT to
            String serverUrl = environment.getProperty("cdn.url") + filename;

            // Request header
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.valueOf(Objects.requireNonNull(file.getContentType())));
            headers.set("X-Custom-Auth-Key", environment.getProperty("cdn.key"));

            // Check if the file is already on the server
            try {
                new RestTemplate().exchange(serverUrl, HttpMethod.HEAD, new HttpEntity<>("", headers), String.class);
            } catch (HttpClientErrorException e) {
                // File doesn't exist on the server
                if (e.getStatusCode().value() == 404) {
                    // Request entity = body + headers
                    HttpEntity<byte[]> requestEntity = new HttpEntity<>(file.getBytes(), headers);

                    // Make the PUT request
                    new RestTemplate().put(serverUrl, requestEntity);
                    return filename;
                }
                // Handle any other HttpClientErrorException
                e.printStackTrace();
                throw new Exception("Not uploaded");
            }
            // There is already a byte-for-byte identical file on the server
            return filename;
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception("Not uploaded");
        }
    }

    public boolean delete(String file) {
        try {
            // URL to DELETE from
            String serverUrl = environment.getProperty("cdn.url") + file;
            System.out.println(serverUrl);
            System.out.println(environment.getProperty("cdn.key"));

            // Request header
            HttpHeaders headers = new HttpHeaders();
            headers.set("X-Custom-Auth-Key", environment.getProperty("cdn.key"));

            // Check if the file actually exists on the server
            try {
                new RestTemplate().exchange(serverUrl, HttpMethod.HEAD, new HttpEntity<>("", headers), String.class);
            } catch (HttpClientErrorException e) {
                // File doesn't exist on the server
                if (e.getStatusCode().value() == 404)
                    return false;
                // Handle any other HttpClientErrorException
                e.printStackTrace();
                return false;
            }

            // Make the DELETE request
            new RestTemplate().exchange(serverUrl, HttpMethod.DELETE, new HttpEntity<>("", headers), String.class);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
