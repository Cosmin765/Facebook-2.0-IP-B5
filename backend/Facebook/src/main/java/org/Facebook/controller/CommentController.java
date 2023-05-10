package org.Facebook.controller;

import org.Facebook.mapper.CommentMapper;
import org.Facebook.model.dto.CommentDto;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.User;
import org.Facebook.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/api")
//@Controller
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    /*@PostMapping("/postcomment")
    @ResponseBody
    public Comment postComment(@RequestBody Comment comment) {
        return commentService.postComment(comment);
    }*/

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable Integer id) {
        commentService.deleteComment(id);
    }

    @PostMapping("/postcomment")
    @ResponseBody
    // TODO: ar trebui sa primesti obiectul cu @RequestBody, in loc de @RequestParam si dupa doar sa dai save
    /*public void postComment(@RequestBody Integer postId, @RequestParam Integer userId, @RequestParam String content) {
        commentService.postComment(postId, userId, content);
    }*/
    public String postComment (@RequestBody CommentDto commentDto) {
        commentService.postComment(commentDto);
        return "comment posted";
    }

    @RequestMapping(value = "/comments")
    @ResponseBody
    // TODO: nu merge endpoint-ul, imi da eroare. Pls verifica
    public List<Comment> posts() {
        return commentService.getAllComments();
    }


    @GetMapping(value = "/rep_com")
    @ResponseBody
    public void hideCom(@RequestBody Comment comment) {
        commentService.hideCom(comment);
    }

    /*@GetMapping(value = "/comments")
    public List<Comment> posts() {
        return commentService.getAllComments();
    }*/

}
