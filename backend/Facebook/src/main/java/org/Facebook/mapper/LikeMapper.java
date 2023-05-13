package org.Facebook.mapper;

import org.Facebook.model.dto.LikeDto;
import org.Facebook.model.entity.Like;

public class LikeMapper {
    public static LikeDto toDto(Like like) {
        return LikeDto.builder()
                .id(like.getId())
                .createdAt(like.getCreatedAt())
                .build();
    }
    public static Like fromDto(LikeDto like) {
        return Like.builder()
                .id(like.getId())
                .createdAt(like.getCreatedAt())
                .build();
    }
}
