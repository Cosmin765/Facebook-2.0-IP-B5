package org.FacebookConversations.controller;


import org.FacebookConversations.model.dto.ConversationDto;
import org.FacebookConversations.service.ConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ConversationController {
    @Autowired
    private ConversationService conversationService;

    @GetMapping(value = "/allConversations")
    public List<ConversationDto> getAllConversations(){
        return conversationService.getAllConversations();
    }
}
