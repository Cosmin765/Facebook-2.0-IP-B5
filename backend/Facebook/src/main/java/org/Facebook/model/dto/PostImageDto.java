package org.Facebook.model.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostImageDto {
    private Integer id;
    private Integer postId;
    private String imageLink;


}
