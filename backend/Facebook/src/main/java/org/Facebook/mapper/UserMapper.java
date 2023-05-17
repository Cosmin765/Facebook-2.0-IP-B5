package org.Facebook.mapper;

import org.Facebook.model.dto.UserDto;
import org.Facebook.model.entity.User;

public class UserMapper {
    public static UserDto toDto(User user) {
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .birthday(user.getBirthday())
                .email(user.getEmail())
                .bio(user.getBio())
                .isLoggedIn(user.getIsLoggedIn())
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
                .isLoggedIn(userDto.getIsLoggedIn())
                .build();
    }
}
