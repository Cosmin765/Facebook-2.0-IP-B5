package org.Facebook.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.Facebook.model.entity.User;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDto {
    private Integer id;
    private User user;
    private String title;
    private String content;
    private byte[] image;
}
