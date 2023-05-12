package org.Facebook.model.dto;

import org.Facebook.model.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LikeDto {
    private Integer id;
    private Post post;
    private UserDto user;

}
