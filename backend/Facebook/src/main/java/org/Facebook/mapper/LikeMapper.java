package org.Facebook.mapper;

import org.Facebook.model.dto.LikeDto;
import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Like;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.Facebook.repository.UserRepository;
import org.Facebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

public class LikeMapper {

    public static LikeDto toDto(Like like) {
        return LikeDto.builder()
                .id(like.getId())
                .post(like.getPost())
                .user(UserMapper.toDto(like.getUser()))
                .build();
    }
}
