package org.FacebookConversations.service;

import org.Facebook.mapper.UserMapper;
import org.Facebook.model.dto.UserDto;
import org.Facebook.model.entity.User;
import org.FacebookConversations.mapper.MessageMapper;
import org.FacebookConversations.model.dto.MessageDto;
import org.FacebookConversations.model.entity.Message;
import org.FacebookConversations.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    public List<MessageDto> getAllMessages() {
        return messageRepository.findAll().stream().map(MessageMapper::toDto).toList();
    }

    public List<MessageDto> getByUserId(Integer id) {
        List<Message> messages = messageRepository.findByUserId(id);
        return messages.stream().map(MessageMapper::toDto).toList();
    }

    public List<MessageDto> getByConversationId(Integer id) {
        List<Message> messages = messageRepository.findByConversationId(id);
        return messages.stream().map(MessageMapper::toDto).toList();
    }

    public List<MessageDto> getByUserAndConversationId(Integer userId, Integer conversationId) {
        List<Message> messages = messageRepository.findByUserIdAndConversationId(userId, conversationId);
        return messages.stream().map(MessageMapper::toDto).toList();
    }

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    public List<MessageDto> getLastMessagesFromConversation(Integer conversationId, Integer count, Integer cursor) {
        List<Message> messages = messageRepository.findLastMessagesForConversation(conversationId, count, cursor);
        Collections.reverse(messages);
        return messages.stream().map(MessageMapper::toDto).toList();
    }

    public List<MessageDto> getToFrom(Integer to,Integer from){
        List<Message> messages = messageRepository.findToFromConv(from,to);
        return messages.stream().map(MessageMapper::toDto).toList();
    }

    public void sendMessage(Integer toUser, Message message) {
        saveMessage(message);
        simpMessagingTemplate.convertAndSend("/topic/messages/" + toUser, message);
    }

}
