package org.Facebook.mapper;

import org.Facebook.model.dto.FriendRequestDto;
import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.FriendRequest;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.Facebook.repository.UserRepository;
import org.Facebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;


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
