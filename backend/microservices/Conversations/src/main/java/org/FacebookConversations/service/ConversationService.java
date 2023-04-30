package org.FacebookConversations.service;

import org.FacebookConversations.mapper.ConversationMapper;
import org.FacebookConversations.model.dto.ConversationDto;
import org.FacebookConversations.repository.ConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConversationService {
    @Autowired
    private ConversationRepository conversationRepository;
    public List<ConversationDto> getAllConversations() {
        return conversationRepository.findAll().stream().map(ConversationMapper::toDto).toList();
    }
}
