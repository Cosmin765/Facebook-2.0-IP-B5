package org.Facebook.mapper;

import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.Facebook.repository.UserRepository;
import org.Facebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;


public class PostMapper {
    public static PostDto toDto(Post post) {
        return PostDto.builder()
                .id(post.getId())
                .content(post.getContent())
                .userId(post.getUser().getId())
                .adLocation(post.getAdLocation())
                .adStatus(post.getAdStatus())
                .images(post.getImages())
                .build();
    }

    public static Post fromDto(PostDto postDto) {
        return Post.builder()
                .id(postDto.getId())
                .content(postDto.getContent())
                .adLocation(postDto.getAdLocation())
                .adStatus(postDto.getAdStatus())
                .images(postDto.getImages()).build();
    }
}
