package org.FacebookAds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class AdsMicroservice {
    public static void main(String[] args) {
        SpringApplication.run(AdsMicroservice.class, args);
    }
}
