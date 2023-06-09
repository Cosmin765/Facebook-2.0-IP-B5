package org.Facebook.mapper;

import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Post;

public class PostMapper {
    public static PostDto toDto(Post post) {
        return PostDto.builder()
                .id(post.getId())
                .user(UserMapper.toDto(post.getUser()))
                .content(post.getContent())
                .likes(post.getLikes().stream().map(LikeMapper::toDto).toList())
                .comments(post.getComments().stream().map(CommentMapper::toDto).toList())
                .postImages(post.getPostImages().stream().map(PostImageMapper::toDto).toList())
                .location(post.getLocation())
                .status(post.getStatus())
                .createdAt(post.getCreatedAt())
                .updatedAt(post.getUpdatedAt())
                .build();
    }

    public static Post fromDto(PostDto postDto) {
        return Post.builder()
                .id(postDto.getId())
                .content(postDto.getContent())
                .likes(postDto.getLikes().stream().map(LikeMapper::fromDto).toList())
                .comments(postDto.getComments().stream().map(CommentMapper::fromDto).toList())
                .postImages(postDto.getPostImages().stream().map(PostImageMapper::fromDto).toList())
                .location(postDto.getLocation())
                .status(postDto.getStatus())
                .createdAt(postDto.getCreatedAt())
                .updatedAt(postDto.getUpdatedAt())
                .build();
    }
}
