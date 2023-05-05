package org.FacebookConversations.controller;

import org.FacebookConversations.mapper.ConversationMapper;
import org.FacebookConversations.mapper.ConversationUserMapper;
import org.FacebookConversations.model.dto.ConversationDto;
import org.FacebookConversations.model.dto.ConversationUserDto;
import org.FacebookConversations.model.entity.Conversation;
import org.FacebookConversations.model.entity.ConversationUser;
import org.FacebookConversations.service.ConversationUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conversationUsers")
public class ConversationUserController {

    @Autowired
    private ConversationUserService conversationUserService;

    @GetMapping(value = "")
    public List<ConversationUserDto> getConversationUsers(){
        return conversationUserService.getAllConversationUsers();
    }

    @PostMapping(value = "")
    public ConversationUserDto createConversation(@RequestBody ConversationUser conversationUser) {
        ConversationUser conv = conversationUserService.saveConversation(conversationUser);
        return ConversationUserMapper.toDto(conv);
    }

    @GetMapping(value = "/{id}")
    public ConversationUserDto getConversationUsersById(@PathVariable Integer id) {
        return conversationUserService.getConversationUsersByConversationId(id);
    }

}
