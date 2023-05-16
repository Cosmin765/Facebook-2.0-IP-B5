package org.Facebook.mapper;

import org.Facebook.model.dto.NotificationDto;
import org.Facebook.model.entity.Notification;

public class NotificationMapper {
    public static NotificationDto toDto(Notification notification) {
        return NotificationDto.builder()
                .id(notification.getId())
                .user(UserMapper.toDto(notification.getUser()))
                .message(notification.getMessage())
                .isRead(notification.getIsRead())
                .createdAt(notification.getCreatedAt())
                .updatedAt(notification.getUpdatedAt())
                .build();
    }
    public static Notification fromDto(NotificationDto notification) {
        return Notification.builder()
                .id(notification.getId())
                .user(UserMapper.fromDto(notification.getUser()))
                .message(notification.getMessage())
                .isRead(notification.getIsRead())
                .createdAt(notification.getCreatedAt())
                .updatedAt(notification.getUpdatedAt())
                .build();
    }
}
