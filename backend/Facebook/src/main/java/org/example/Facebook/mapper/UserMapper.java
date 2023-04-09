package org.example.Facebook.mapper;

import org.example.Facebook.model.dto.UserDto;
import org.example.Facebook.model.entity.User;

public class UserMapper {
    public static UserDto toDto(User user ){
        return UserDto.builder()
                .Id(user.getId())
                .name(user.getName())
                .birthday(user.getBirthday())
                .email(user.getEmail())
                .bio(user.getBio())
                .build();
    }
}
