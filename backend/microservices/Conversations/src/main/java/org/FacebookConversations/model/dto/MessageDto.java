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
public class MessageDto {
    private Integer id;
    private Integer conversationId;
    private Integer fromUserId;
    private Integer toUserId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
