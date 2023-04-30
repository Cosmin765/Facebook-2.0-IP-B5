package org.FacebookConversations.controller;

import org.FacebookConversations.model.dto.ConversationUserDto;
import org.FacebookConversations.service.ConversationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ConversationUserController {

    @Autowired
    private ConversationUserService conversationUserService;

    @GetMapping(value = "/conversationUsers")
    @ResponseBody
    public List<ConversationUserDto> getConversationUsers(){
        return conversationUserService.getAllConversationUsers();

    }
  
}
