package org.FacebookConversations.util.websocket;

import org.FacebookConversations.model.entity.Message;
import org.FacebookConversations.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebSocketController {

    @Autowired
    private MessageService messageService;

    @MessageMapping("/chat/{to}")
    public void sendMessageUser(@DestinationVariable Integer to, Message message){
        messageService.sendMessage(to, message);
    }
}
