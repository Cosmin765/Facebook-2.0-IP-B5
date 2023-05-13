package org.FacebookConversations;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ConversationsMicroservice {
    public static void main(String[] args) {
        SpringApplication.run(ConversationsMicroservice.class, args);
    }
}
