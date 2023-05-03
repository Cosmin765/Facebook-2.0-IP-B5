package org.FacebookConversations.service;

import org.FacebookConversations.util.exception.ResourceNotFoundException;
import org.FacebookConversations.mapper.ConversationMapper;
import org.FacebookConversations.model.dto.ConversationDto;
import org.FacebookConversations.model.entity.Conversation;
import org.FacebookConversations.repository.ConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ConversationService {
    @Autowired
    private ConversationRepository conversationRepository;

    public List<ConversationDto> getAllConversations() {
        return conversationRepository.findAll().stream().map(ConversationMapper::toDto).toList();
    }

    public ConversationDto getConversationById(Integer id) {
        Conversation conversation = conversationRepository.findConvById(id);
        if (conversation == null) {
            throw new ResourceNotFoundException("Conversation not found");
        } else {
            return ConversationMapper.toDto(conversation);
        }
    }

    public Conversation saveConversation(Conversation conversation) {
        conversation.setCreatedAt(LocalDateTime.now());
        conversation.setUpdatedAt(LocalDateTime.now());
        return conversationRepository.save(conversation);
    }
}
