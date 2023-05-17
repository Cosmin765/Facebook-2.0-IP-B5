package org.Facebook.mapper;

import org.Facebook.model.dto.FriendRequestDto;
import org.Facebook.model.entity.FriendRequest;


public class FriendRequestMapper {
    public static FriendRequestDto toDto(FriendRequest friendRequest) {
        return FriendRequestDto.builder()
                .id(friendRequest.getId())
                .sender(UserMapper.toDto(friendRequest.getSender()))
                .receiver(UserMapper.toDto(friendRequest.getReceiver()))
                .status(friendRequest.getStatus())
                .createdAt(friendRequest.getCreatedAt())
                .updatedAt(friendRequest.getUpdatedAt())
                .build();
    }

    public static FriendRequest fromDto(FriendRequestDto friendRequest) {
        return FriendRequest.builder()
                .id(friendRequest.getId())
                .sender(UserMapper.fromDto(friendRequest.getSender()))
                .receiver(UserMapper.fromDto(friendRequest.getReceiver()))
                .status(friendRequest.getStatus())
                .createdAt(friendRequest.getCreatedAt())
                .updatedAt(friendRequest.getUpdatedAt())
                .build();
    }
}
