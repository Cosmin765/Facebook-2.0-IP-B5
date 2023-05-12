package org.Facebook.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.Like;
import org.Facebook.model.entity.PostImage;
import org.Facebook.model.entity.User;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDto {
    private Integer id;
    private UserDto user;
    private String content;
    private List<LikeDto> likes;
    private List<CommentDto> comments;
    private List<PostImageDto> postImages;
}
