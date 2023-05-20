package org.FacebookConversations.service;

import org.FacebookConversations.common.KeywordExtractorService;
import org.FacebookConversations.mapper.MessageMapper;
import org.FacebookConversations.model.dto.MessageDto;
import org.FacebookConversations.model.entity.Message;
import org.FacebookConversations.repository.ConversationRepository;
import org.FacebookConversations.repository.MessageRepository;
import org.FacebookConversations.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private ConversationRepository conversationRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @Autowired
    private KeywordExtractorService keywordExtractorService;

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

    public Message saveMessage(MessageDto messageDto) {
        Message message = Message.builder()
                .id(messageDto.getId())
                .conversation(conversationRepository.findConvById(messageDto.getConversationId()))
                .user(userRepository.findById(messageDto.getUserId()).get())
                .content(messageDto.getContent())
                .createdAt(messageDto.getCreatedAt())
                .build();
        return messageRepository.save(message);
    }

    public List<MessageDto> getLastMessagesFromConversation(Integer conversationId, Integer count, Integer cursor) {
        List<Message> messages = messageRepository.findLastMessagesForConversation(conversationId, count, cursor);
        Collections.reverse(messages);
        return messages.stream().map(MessageMapper::toDto).toList();
    }

    public List<MessageDto> getToFrom(Integer to, Integer from) {
        List<Message> messages = messageRepository.findToFromConv(from, to);
        return messages.stream().map(MessageMapper::toDto).toList();
    }

    public void sendMessage(Integer toUser, MessageDto message) {
        saveMessage(message);
        keywordExtractorService.processUserInput(message.getContent(), message.getUserId());
        simpMessagingTemplate.convertAndSend("/topic/messages/" + toUser, message);
    }

}
