package org.FacebookConversations.service;

import org.FacebookConversations.mapper.ConversationMapper;
import org.FacebookConversations.mapper.ConversationUserMapper;
import org.FacebookConversations.model.dto.ConversationUserDto;
import org.FacebookConversations.model.entity.Conversation;
import org.FacebookConversations.model.entity.ConversationUser;
import org.FacebookConversations.repository.ConversationUserRepository;
import org.FacebookConversations.util.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ConversationUserService {

    @Autowired
    private ConversationUserRepository conversationUserRepository;

    public List<ConversationUserDto> getAllConversationUsers() {
        return conversationUserRepository.findAll().stream().map(ConversationUserMapper::toDto).toList();
    }

    public ConversationUserDto getConversationUsersByConversationId(Integer conversationId) {
        ConversationUser conversation = conversationUserRepository.findByConversationId(conversationId);
        if (conversation == null) {
            throw new ResourceNotFoundException("Conversation not found");
        } else {
            return ConversationUserMapper.toDto(conversation);
        }
    }

    public ConversationUser saveConversation(ConversationUser conversation) {
        conversation.setCreatedAt(LocalDateTime.now());
        conversation.setUpdatedAt(LocalDateTime.now());
        return conversationUserRepository.save(conversation);
    }

    public List<Integer> getConversationIdByUserId(Integer userId) {
        List<Integer> conversationIds = conversationUserRepository.findConversationIdByUserId(userId);
        if (conversationIds.isEmpty()) {
            throw new ResourceNotFoundException("No conversations found");
        } else {
            return conversationIds;
        }
    }

    public List<Integer> getUserIdByConversationId(Integer conversationId) {
        return conversationUserRepository.findUserIdByConversationId(conversationId);
    }

}
