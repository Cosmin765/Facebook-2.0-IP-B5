package org.Facebook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FacebookApplication {
    public static void main(String[] args) {
        SpringApplication.run(FacebookApplication.class, args);
    }
}
