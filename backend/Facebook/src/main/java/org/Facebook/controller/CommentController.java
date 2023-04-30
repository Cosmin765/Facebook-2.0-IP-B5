package org.Facebook.controller;

import org.Facebook.model.dto.CommentDto;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.User;
import org.Facebook.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/")
    public Comment postComment(@RequestBody Comment comment) {
        return commentService.postComment(comment);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable Integer id) {
        commentService.deleteComment(id);
    }

    @PostMapping("/post")
    // TODO: ar trebui sa primesti obiectul cu @RequestBody, in loc de @RequestParam si dupa doar sa dai save
    public void postComment(@RequestParam Integer postId, @RequestParam Integer userId, @RequestParam String content) {
        commentService.postComment(postId, userId, content);
    }

    @GetMapping(value = "/comments")
    // TODO: nu merge endpoint-ul, imi da eroare. Pls verifica
    public List<CommentDto> posts() {
        return commentService.getAllComments();
    }

    @PostMapping(value = "/rep_com")
    public void hideCom(@RequestBody Comment comment) {
        commentService.hideCom(comment);
    }

    /*@GetMapping(value = "/comments")
    public List<Comment> posts() {
        return commentService.getAllComments();
    }*/

}
