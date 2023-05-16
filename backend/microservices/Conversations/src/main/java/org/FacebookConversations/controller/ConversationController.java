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

    @GetMapping("/user/{userId}")
    public List<ConversationDto> getUserConversations(@PathVariable Integer userId) {
        return conversationService.getUserConversations(userId).stream().map(ConversationMapper::toDto).toList();
    }

    @GetMapping("/findPair/{myId}/{otherId}")
    public Conversation findPair(@PathVariable Integer myId, @PathVariable Integer otherId) {
        return conversationService.findPair(myId, otherId);
    }

    @PostMapping(value = "")
    public ConversationDto createConversation(@RequestBody Conversation conversation) {
        Conversation conv = conversationService.saveConversation(conversation);
        return ConversationMapper.toDto(conv);
    }

    //update? delete?
}
