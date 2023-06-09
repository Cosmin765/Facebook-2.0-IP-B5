package org.FacebookConversations.controller;

import org.FacebookConversations.mapper.MessageMapper;
import org.FacebookConversations.model.dto.MessageDto;
import org.FacebookConversations.model.entity.Message;
import org.FacebookConversations.repository.MessageRepository;
import org.FacebookConversations.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

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

    @GetMapping(value = "/conv/{to}/{from}")
    public List<MessageDto> findToFrom(@PathVariable Integer to, @PathVariable Integer from) {
        return messageService.getToFrom(from, to);
    }

    @PostMapping("/conv/messages")
    public List<MessageDto> lastMessages(@RequestParam Integer id, @RequestParam Integer count,@RequestParam Integer cursor) {
        return messageService.getLastMessagesFromConversation(id, count,cursor);
    }

    @RequestMapping(value = "/conv/messages")
    public ModelAndView lastMessagesPage() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("messages.html");
        return modelAndView;
    }

    @PostMapping(value = "")
    public MessageDto createMessage(@RequestBody MessageDto message) {
        Message mess = messageService.saveMessage(message);
        return MessageMapper.toDto(mess);
    }
}
