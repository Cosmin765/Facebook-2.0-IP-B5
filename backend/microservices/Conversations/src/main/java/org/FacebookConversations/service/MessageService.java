package org.FacebookConversations.service;

import org.FacebookConversations.mapper.MessageMapper;
import org.FacebookConversations.model.dto.MessageDto;
import org.FacebookConversations.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<MessageDto> getAllMessages(){
        return messageRepository.findAll().stream().map(MessageMapper::toDto).toList();
    }

}
