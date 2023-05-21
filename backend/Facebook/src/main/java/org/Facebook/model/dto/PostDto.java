package org.Facebook.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDto {
    private Integer id;
    private UserDto user;
    private String content;
    private String location;
    private String status;
    private List<LikeDto> likes;
    private List<CommentDto> comments;
    private List<PostImageDto> postImages;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
