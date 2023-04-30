package org.FacebookConversations.controller;

import org.FacebookConversations.model.dto.MessageDto;
import org.FacebookConversations.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping(value = "/allMessages")
    public List<MessageDto> getAllMessages(){
        return messageService.getAllMessages();
    }

}
