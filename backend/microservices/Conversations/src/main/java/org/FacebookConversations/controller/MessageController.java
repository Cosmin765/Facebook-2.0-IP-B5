package org.FacebookConversations.controller;

import org.FacebookConversations.mapper.MessageMapper;
import org.FacebookConversations.model.dto.MessageDto;
import org.FacebookConversations.model.entity.Message;
import org.FacebookConversations.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping(value = "")
    public List<MessageDto> getAllMessages() {
        return messageService.getAllMessages();
    }

    @GetMapping(value = "/user/{id}")
    public List<MessageDto> getByUserId(@PathVariable Integer id) {
        return messageService.getByUserId(id);
    }

    @GetMapping(value = "/conv/{id}")
    public List<MessageDto> getByConvId(@PathVariable Integer id) {
        return messageService.getByConversationId(id);
    }

    @GetMapping(value = "/user+conv/{userId}+{convId}")
    public List<MessageDto> getByUseridAndConvId(@PathVariable Integer userId, @PathVariable Integer convId) {
        return messageService.getByUserAndConversationId(userId, convId);
    }

    @PostMapping(value = "")
    public MessageDto createMessage(@RequestBody Message message) {
        Message mess = messageService.saveMessage(message);
        return MessageMapper.toDto(mess);
    }

}
