package org.Facebook.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.Facebook.model.entity.Like;
import org.Facebook.model.entity.PostImage;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDto {
    private Integer id;
    private Integer userId;
    //    private String title;
    private String content;

    private List<Like> likes;
    private List<PostImage> images;

    private String adLocation;

    private String adStatus;
}
