package org.FacebookAds.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@Controller
public class FileDeleteController {
    @Autowired
    private Environment environment;

    @DeleteMapping("/cloudflare/delete")
    public ResponseEntity<String> handleDelete(@RequestParam("file") String file) {
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
}