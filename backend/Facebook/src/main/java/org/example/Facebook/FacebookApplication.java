package org.example.Facebook;
import org.example.Facebook.model.*;
import org.example.Facebook.service.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@SpringBootApplication
@RestController
public class FacebookApplication {

    public static void main(String[] args) {
        SpringApplication.run(FacebookApplication.class, args);
    }

}
