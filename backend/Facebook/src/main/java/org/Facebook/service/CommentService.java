package org.Facebook.service;

import org.Facebook.mapper.CommentMapper;
import org.Facebook.mapper.UserMapper;
import org.Facebook.model.dto.CommentDto;
import org.Facebook.model.dto.UserDto;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.Facebook.repository.CommentRepository;
import org.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.Facebook.common.KeywordExtractorService;

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
    private KeywordExtractorService keywordExtractorService;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void postComment(CommentDto commentDto) {
        keywordExtractorService.processUserInput(commentDto.getContent(), commentDto.getUserId());
        commentRepository.postComment(commentDto.getPostId(), commentDto.getUserId(), commentDto.getContent());
    }

    public void deleteComment(int commentId) {
        commentRepository.deleteById(commentId);
    }

    public void updateComment(Comment comment) {
        commentRepository.save(comment);
    }

    public void editComment(String content, Integer comment_id) {
        commentRepository.editComment(content, comment_id);
    }

    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    public List<Comment> getCommentsByUser(User user) {
        return commentRepository.findByUser(user);
    }

    public List<Comment> getCommentsByPost(Post post) {
        return commentRepository.findByPost(post);
    }

    public List<Comment> getCommentsByUserId(Integer user_id) throws Exception {
        if (commentRepository.findByUserId(user_id) == null)
            throw new Exception("Comment not found.");
        return commentRepository.findByUserId(user_id);
    }

    public List<Comment> getCommentsByPostId(Integer post_id) {
        return commentRepository.findByPostId(post_id);
    }

    public Comment getCommentById(Integer id) {
        return commentRepository.findByCommentId(id);
    }
}
