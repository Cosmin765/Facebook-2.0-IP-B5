package org.example.Facebook.service;

import org.example.Facebook.model.entity.Comment;
import org.example.Facebook.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    public List<Comment> getAllComments() {
        return commentRepository.findAll().stream().toList();
    }
}
