package org.Facebook.service;

import org.Facebook.model.entity.Comment;
import org.Facebook.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    public List<Comment> getAllComments() {
        return commentRepository.findAll().stream().toList();
    }
}
