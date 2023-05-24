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
//@RequestMapping("/api")
//@Controller
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

//    @PostMapping("/comments/post")
//    @ResponseBody
//    public Comment postComment(@RequestBody Comment comment) {
//        return commentService.postComment(comment);
//    }

//    @PostMapping("/postcomment")
//    @ResponseBody
//    public String postComment (@RequestBody CommentDto commentDto) {
//        commentService.postComment(commentDto);
//        return "comment posted";
//    }

    @PostMapping
    @ResponseBody
    public RedirectView postComment(@ModelAttribute CommentDto commentDto, RedirectAttributes redirectAttributes) {

        commentService.postComment(commentDto);
        redirectAttributes.addFlashAttribute("message", "Comment posted successfully!");
        return new RedirectView("/comments");
    }

    @GetMapping(value = "/comments")
    @ResponseBody
    public List<CommentDto> comments() {
        return commentService.getAllComments().stream().map(CommentMapper::toDto).toList();
    }

    @GetMapping(value = "/comment")
    @ResponseBody
    public Comment getCommentById(@RequestParam("id") Integer id) throws Exception {
        return commentService.getCommentById(id);
    }

    @PostMapping(value = "comment/delete")
    @ResponseBody
    public RedirectView deleteComment(@RequestParam("id") Integer id, RedirectAttributes redirectAttributes) {
        commentService.deleteComment(id);
        redirectAttributes.addFlashAttribute("message", "Comment deleted!");
        return new RedirectView("/comments");
    }
}
