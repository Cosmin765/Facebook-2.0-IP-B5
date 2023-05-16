package org.FacebookConversations.mapper;

import org.FacebookConversations.model.dto.MessageDto;
import org.FacebookConversations.model.entity.Message;

public class MessageMapper {
    public static MessageDto toDto(Message message){
        return MessageDto.builder()
                .id(message.getId())
                .conversationId(message.getConversation().getId())
                .userId(message.getUser().getId())
                .content(message.getContent())
                .createdAt(message.getCreatedAt())
                .build();
    }
}
