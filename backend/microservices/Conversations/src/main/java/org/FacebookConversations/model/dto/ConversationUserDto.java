package org.FacebookConversations.model.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ConversationUserDto {
    private Integer id;
    private Integer conversationId;
    private Integer userId;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
