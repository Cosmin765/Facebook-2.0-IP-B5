package org.Facebook.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class CommentDto {
    private Integer id;
    private Post post;
    private UserDto user;
    private String content;
    private Boolean reported;
}
