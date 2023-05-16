package org.FacebookConversations.service;

import org.FacebookConversations.model.entity.ConversationUser;
import org.FacebookConversations.model.entity.User;
import org.FacebookConversations.repository.ConversationUserRepository;
import org.FacebookConversations.repository.UserRepository;
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
    @Autowired
    private ConversationUserRepository conversationUserRepository;
    @Autowired
    private UserRepository userRepository;

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

    public List<Conversation> getUserConversations(Integer userId) {
        return conversationRepository.findByUserId(userId);
    }

    public Conversation findPair(Integer myId, Integer otherId) {
        Conversation conversation =  conversationRepository.findPair(myId, otherId);
        if(conversation == null) {
            User myUser = userRepository.findById(myId).get();
            User otherUser = userRepository.findById(otherId).get();
            conversation = new Conversation();
            conversationRepository.save(conversation);
            conversationUserRepository.save(ConversationUser.builder().conversation(conversation).user(myUser).build());
            conversationUserRepository.save(ConversationUser.builder().conversation(conversation).user(otherUser).build());
            return findPair(myId, otherId);
        }
        return conversation;
    }
}
