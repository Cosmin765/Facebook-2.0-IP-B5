package org.Facebook.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NotificationDto {
    private Integer id;
    private UserDto user;
    private String message;
    private Boolean isRead;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
