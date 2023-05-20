package org.Facebook.mapper;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.dto.CommentDto;

public class CommentMapper {
    public static CommentDto toDto(Comment comment){
        return CommentDto.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .post(comment.getPost())
                .user(comment.getUser())
                .build();
    }

    public static Comment fromDto(CommentDto commentDto) {
        return Comment.builder()
                .id(commentDto.getId())
                .content(commentDto.getContent())
                .post(commentDto.getPost())
                .user(commentDto.getUser())
                .build();
    }
}
