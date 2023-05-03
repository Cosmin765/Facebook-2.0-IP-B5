package org.FacebookConversations.util.websocket;

import org.FacebookConversations.model.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class MessageBroker {
    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public MessageBroker(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendMessage(Message message) {
        messagingTemplate.convertAndSend("/topic/conversation/" + message.getConversationId(), message);
    }


}
