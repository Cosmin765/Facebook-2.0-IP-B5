package org.FacebookConversations.mapper;

import org.FacebookConversations.model.dto.ConversationUserDto;
import org.FacebookConversations.model.entity.ConversationUser;


public class ConversationUserMapper {
    public static ConversationUserDto toDto(ConversationUser conversationUser){
        return ConversationUserDto.builder()
                .id(conversationUser.getId())
                .conversation(ConversationMapper.toDto(conversationUser.getConversation()))
                .user(UserMapper.toDto(conversationUser.getUser()))
                .createdAt(conversationUser.getCreatedAt())
                .updatedAt(conversationUser.getUpdatedAt())
                .build();
    }
}


