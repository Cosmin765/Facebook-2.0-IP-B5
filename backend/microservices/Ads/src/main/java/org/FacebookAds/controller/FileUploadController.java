package org.FacebookAds.controller;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.security.MessageDigest;
import java.util.Base64;
import java.util.Objects;

@Controller
public class FileUploadController {
    @Autowired
    private Environment environment;

    @GetMapping("/upload")
    public String testForm() {
        return "uploadForm";
    }

    @PostMapping("/cloudflare/upload")
    public ResponseEntity<String> handleUpload(@RequestParam("file") MultipartFile file) {
        try {
            // It should be checked in front-end that the file is not larger than the limit set in properties file,
            // otherwise the server resets the connection

            // URL to PUT to
            String serverUrl = environment.getProperty("cdn.url") + Base64.getUrlEncoder().encodeToString(MessageDigest.getInstance("SHA-256").digest(file.getBytes())) + "." + FilenameUtils.getExtension(file.getOriginalFilename());

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