package org.Facebook.service;

import org.Facebook.mapper.CommentMapper;
import org.Facebook.model.dto.CommentDto;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.Facebook.repository.CommentRepository;
import org.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class CommentService {
    @Autowired
    private final CommentRepository commentRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment postComment(Comment comment) {
        comment.setCreatedAt(LocalDateTime.now());
        comment.setUpdatedAt(LocalDateTime.now());
        return commentRepository.save(comment);
    }

    /*@Transactional
    public void postComment(Integer postId, Integer userId, String content) {
        commentRepository.postComment(postId, userId, content);
    }*/
    public void postComment(CommentDto commentDto) {
        Comment comment = CommentMapper.fromDto(commentDto);
        User user = userRepository.getById(commentDto.getUserId());
        comment.setUser(user);

        commentRepository.save(comment);
    }

    public void deleteComment(int commentId) {
        commentRepository.deleteById(commentId);
    }

    /*public List<CommentDto> getAllComments() {
        return commentRepository.findAll().stream().map(CommentMapper::toDto).toList();
    }*/
    public void hideCom(Comment comment) {
//       comment.isReported();
    }

    public List<Comment> getAllComments() {

        //return commentRepository.findAll().stream().toList();
        return commentRepository.findAll();
    }

    public List<Comment> getCommentsByUser(User user) {
        return commentRepository.findByUser(user);
    }
    public List<Comment> getCommentsByPost(Post post) {
        return commentRepository.findByPost(post);
    }
}
