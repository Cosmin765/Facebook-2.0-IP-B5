package org.FacebookConversations.service;

import org.FacebookConversations.mapper.ConversationUserMapper;
import org.FacebookConversations.model.dto.ConversationUserDto;
import org.FacebookConversations.model.entity.ConversationUser;
import org.FacebookConversations.repository.ConversationUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConversationUserService {

    @Autowired
    private ConversationUserRepository conversationUserRepository;

    public List<ConversationUserDto> getAllConversationUsers() {
        return conversationUserRepository.findAll().stream().map(ConversationUserMapper::toDto).toList();
    }

    public ConversationUser getConversationUsersByConversationId(Integer conversationId) {
        return conversationUserRepository.findByConversationId(conversationId);
    }

}
