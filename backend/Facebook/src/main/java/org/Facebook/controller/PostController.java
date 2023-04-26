package org.Facebook.controller;

import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Post;
import org.Facebook.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping(value = "/posts")
    public List<Post> posts() {
        return postService.getAllPosts();
    }

    @GetMapping(value = "/posts/user")
    public List<Post> userPosts(@RequestParam Integer id) throws Exception {
        return postService.getPostsByUserId(id);
    }

    @PostMapping("/posts/new")
    public String createPost(@RequestBody PostDto postDto, RedirectAttributes redirectAttributes) {
        postService.createPost(postDto);
        redirectAttributes.addFlashAttribute("message", "Post created successfully!");
        return "redirect:/post/?id=" + postDto.getId();
    }

    @GetMapping("/posts/new")
    public String showCreateForm(Model model) {
        model.addAttribute("post", new Post());
        return "create-post";
    }

    @GetMapping("/post/delete")
    public String showDeleteForm(@RequestParam("id") Integer id) throws Exception {
        Post post = postService.getPostById(id);
        postService.deletePost(id);
        return "delete-post";
    }

    @PostMapping("/post/delete")
    public String deletePost(@RequestParam("id") Integer id, RedirectAttributes redirectAttributes) {
        postService.deletePost(id);
        redirectAttributes.addFlashAttribute("message", "Post deleted successfully!");
        return "redirect:/posts";
    }

    @GetMapping("/post/update")
    public String showUpdateForm(@RequestParam("id") Integer id) throws Exception {
        Post post = postService.getPostById(id);
        return "update-post";
    }
    @PostMapping(value = "/post/update")
    public String updatePost(@RequestParam("id") Integer id, RedirectAttributes redirectAttributes) throws Exception {
        postService.updatePost(postService.getPostById(id));
        redirectAttributes.addFlashAttribute("message", "Post updated successfully!");
        return "redirect:/post/?id=" + id;
    }
    @GetMapping("/post")
    public Post getPostById(@RequestParam("id") Integer id) throws Exception {
        Post post = postService.getPostById(id);
        return post;
    }
}
