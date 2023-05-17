package org.FacebookAds.service;

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

    public ResponseEntity<String> deleteFile(String file) {
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
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There is no file '" + file + "' on the server!");
                // Handle any other HttpClientErrorException
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Failed to delete!");
            }

            // Make the DELETE request
            new RestTemplate().exchange(serverUrl, HttpMethod.DELETE, new HttpEntity<>("", headers), String.class);
            return ResponseEntity.status(HttpStatus.OK).body("Success!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Failed to delete!");
        }
    }

    public ResponseEntity<String> downloadFile(String file) {
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
                // File doesn't exist on the server
                if (e.getStatusCode().value() == 404)
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("There is no file '" + file + "' on the server!");
                // Handle any other HttpClientErrorException
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Failed to download!");
            }

            // Make the GET request
            ResponseEntity<byte[]> responseEntity = new RestTemplate().exchange(serverUrl, HttpMethod.GET, new HttpEntity<>("", headers), byte[].class);
            if (responseEntity.getBody() != null)
                return ResponseEntity.status(HttpStatus.OK).body(Base64.getEncoder().encodeToString(responseEntity.getBody()));
            return ResponseEntity.status(HttpStatus.OK).body("");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Failed to download!");
        }
    }

    private static String bytesToHex(byte[] hash) {
        StringBuilder hexString = new StringBuilder(2 * hash.length);
        for (byte b : hash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }

    public ResponseEntity<String> uploadFile(MultipartFile file) {
        try {
            // It should be checked in front-end that the file is not larger than the limit set in properties file,
            // otherwise the server resets the connection

            // URL to PUT to
            String serverUrl = environment.getProperty("cdn.url") + bytesToHex(MessageDigest.getInstance("SHA-256").digest(file.getBytes()));

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
                    return ResponseEntity.status(HttpStatus.OK).body("Success!");
                }
                // Handle any other HttpClientErrorException
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Failed to upload!");
            }
            // There is already a byte-for-byte identical file on the server
            return ResponseEntity.status(HttpStatus.CONFLICT).body("File already exists on the server!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Failed to upload!");
        }
    }
}
