package org.Facebook.controller;

import org.Facebook.mapper.CommentMapper;
import org.Facebook.model.dto.CommentDto;
import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.User;
import org.Facebook.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping(value = "/comments")
    @ResponseBody
    public List<CommentDto> comments() {
        return commentService.getAllComments().stream().map(CommentMapper::toDto).toList();
    }

    @GetMapping(value = "/commentPostId")
    public List<CommentDto> commentOfPost(@RequestParam Integer postId){
        return commentService.getCommentsByPostId(postId).stream().map(CommentMapper::toDto).toList();
    }

    @GetMapping(value = "/comment")
    @ResponseBody
    public Comment getCommentById(@RequestParam("id") Integer id) throws Exception {
        return commentService.getCommentById(id);
    }

    @PostMapping(value = "/createComment")
    @ResponseBody
    public void postComment(@RequestBody CommentDto commentDto) {

        commentService.postComment(commentDto);
    }


}
