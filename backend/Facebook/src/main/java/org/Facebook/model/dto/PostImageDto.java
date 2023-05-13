package org.Facebook.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostImageDto {
    private Integer id;
    private String imageLink;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
