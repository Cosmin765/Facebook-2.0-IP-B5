package org.FacebookConversations.mapper;

import org.FacebookConversations.model.dto.ConversationDto;
import org.FacebookConversations.model.entity.Conversation;

public class ConversationMapper {
    public static ConversationDto toDto(Conversation conversation){
        return ConversationDto.builder()
                .id(conversation.getId())
                .createdAt(conversation.getCreatedAt())
                .updateAt(conversation.getUpdatedAt())
                .build();
    }
}
