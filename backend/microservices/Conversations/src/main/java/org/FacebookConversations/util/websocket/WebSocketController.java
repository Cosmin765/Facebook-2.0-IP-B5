package org.FacebookConversations.util.websocket;

import org.FacebookConversations.model.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {
    private final MessageBroker messageBroker;

    @Autowired
    public WebSocketController(MessageBroker messageBroker) {
        this.messageBroker = messageBroker;
    }

    @MessageMapping("/chat/{conversationId}")
    public void sendMessage(@DestinationVariable int conversationId, Message message) {
        message.setConversationId(conversationId);
        messageBroker.sendMessage(message);
    }

}
