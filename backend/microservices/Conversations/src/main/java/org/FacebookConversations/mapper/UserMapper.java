package org.FacebookConversations.mapper;

import org.FacebookConversations.model.dto.UserDto;
import org.FacebookConversations.model.entity.User;

public class UserMapper {
    public static UserDto toDto(User user){
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .birthday(user.getBirthday())
                .email(user.getEmail())
                .bio(user.getBio())
                .build();
    }

    public static User fromDto(UserDto userDto) {
        return User.builder()
                .id(userDto.getId())
                .firstName(userDto.getFirstName())
                .lastName(userDto.getLastName())
                .birthday(userDto.getBirthday())
                .email(userDto.getEmail())
                .bio(userDto.getBio())
                .build();
    }
}
