package org.Facebook.mapper;

import org.Facebook.model.entity.User;
import org.Facebook.model.dto.UserDto;

public class UserMapper {
    public static UserDto toDto(User user ){
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .birthday(user.getBirthday())
                .email(user.getEmail())
                .bio(user.getBio())
                .build();
    }
}
