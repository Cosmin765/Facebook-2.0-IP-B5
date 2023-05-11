package org.Facebook.mapper;

import org.Facebook.model.dto.PostImageDto;
import org.Facebook.model.entity.PostImage;

public class PostImageMapper {

    public static PostImageDto toDto(PostImage postImage) {
        return PostImageDto.builder()
                .id(postImage.getId())
                .postId(postImage.getPost().getId())
                .imageLink(postImage.getImageLink())
                .build();
    }
}
