package org.FacebookAds.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;

@Controller
public class FileDownloadController {
    @Autowired
    private Environment environment;

    @GetMapping("/cloudflare/download")
    public ResponseEntity<String> handleDownload(@RequestParam("file") String file) {
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
}
