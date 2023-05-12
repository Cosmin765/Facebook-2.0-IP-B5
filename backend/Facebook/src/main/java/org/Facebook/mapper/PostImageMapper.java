package org.Facebook.mapper;

import org.Facebook.model.dto.PostImageDto;
import org.Facebook.model.entity.PostImage;

public class PostImageMapper {
    public static PostImageDto toDto(PostImage postImage) {
        return PostImageDto.builder()
                .id(postImage.getId())
                .imageLink(postImage.getImageLink())
                .createdAt(postImage.getCreatedAt())
                .updatedAt(postImage.getUpdatedAt())
                .build();
    }
    public static PostImage fromDto(PostImageDto postImageDto) {
        return PostImage.builder()
                .id(postImageDto.getId())
                .imageLink(postImageDto.getImageLink())
                .createdAt(postImageDto.getCreatedAt())
                .updatedAt(postImageDto.getUpdatedAt())
                .build();
    }
}
