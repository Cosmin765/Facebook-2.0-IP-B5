package org.Facebook.mapper;

import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Post;


public class PostMapper {
    public static PostDto toDto(Post post) {
        return PostDto.builder()
                .id(post.getId())
                .content(post.getContent())
                .user(post.getUser())
                .image(post.getImage())
                .build();
    }
}
