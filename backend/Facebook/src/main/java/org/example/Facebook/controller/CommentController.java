package org.example.Facebook.controller;

import org.example.Facebook.model.entity.Comment;
import org.example.Facebook.model.entity.Post;
import org.example.Facebook.service.CommentService;
import org.example.Facebook.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping(value = "/comments")
    public List<Comment> posts() {
        return commentService.getAllComments();
    }
}
