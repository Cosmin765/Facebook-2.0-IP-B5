package org.FacebookConversations.controller;


import org.FacebookConversations.mapper.ConversationMapper;
import org.FacebookConversations.model.dto.ConversationDto;
import org.FacebookConversations.model.entity.Conversation;
import org.FacebookConversations.service.ConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conversations")
public class ConversationController {
    @Autowired
    private ConversationService conversationService;

    @GetMapping(value = "")
    public List<ConversationDto> getAllConversations() {
        return conversationService.getAllConversations();
    }

    @GetMapping(value = "/{id}")
    public ConversationDto getConversationById(@PathVariable Integer id) {
        return conversationService.getConversationById(id);
    }

    @PostMapping(value = "")
    public ConversationDto createConversation(@RequestBody Conversation conversation) {
        Conversation conv = conversationService.saveConversation(conversation);
        return ConversationMapper.toDto(conv);
    }

    //update? delete?
}
