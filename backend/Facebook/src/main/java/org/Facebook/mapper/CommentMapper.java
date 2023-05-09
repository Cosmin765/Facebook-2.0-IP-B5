package org.Facebook.mapper;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.dto.CommentDto;

public class CommentMapper {
    public static CommentDto toDto(Comment comment){
        return CommentDto.builder()
                .id(comment.getId())
                .post(comment.getPost())
                .user(UserMapper.toDto(comment.getUser()))
                .content(comment.getContent())
                .build();
    }
}
