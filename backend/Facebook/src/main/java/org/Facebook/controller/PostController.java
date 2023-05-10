package org.Facebook.controller;

import org.Facebook.mapper.PostMapper;
import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Post;
import org.Facebook.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

//@RestController
@Controller
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping(value = "/posts")
    @ResponseBody
    public List<PostDto> posts() {
        return postService.getAllPosts().stream().map(PostMapper::toDto).toList();
    }

    @PostMapping("/posts/recommended")
    @ResponseBody
    public List<PostDto> recommendedPosts(@RequestParam Integer count, @RequestParam Integer cursor) {
        return postService.getRecommendedPosts(count, cursor).stream().map(PostMapper::toDto).toList();
    }

    @GetMapping("/posts/recommended")
    public String recommendedPostsPage(Model model) {
        return "recommendedPosts";
    }

    @GetMapping(value = "/posts/user")
    @ResponseBody
    public List<PostDto> userPosts(@RequestParam Integer id) throws Exception {
        return postService.getPostsByUserId(id).stream().map(PostMapper::toDto).toList();
    }

    @PostMapping("/posts/new")
    @ResponseBody
    public String createPost(@RequestBody PostDto postDto, RedirectAttributes redirectAttributes) {
        postService.createPost(postDto);
        redirectAttributes.addFlashAttribute("message", "Post created successfully!");
        return "redirect:/post/?id=" + postDto.getId();
    }

    @GetMapping("/posts/new")
    @ResponseBody
    public String showCreateForm(Model model) {
        model.addAttribute("post", new Post());
        return "create-post";
    }

    @GetMapping("/post/delete")
    @ResponseBody
    public String showDeleteForm(@RequestParam("id") Integer id) throws Exception {
        Post post = postService.getPostById(id);
        postService.deletePost(id);
        return "delete-post";
    }

    @PostMapping("/post/delete")
    @ResponseBody
    public String deletePost(@RequestParam("id") Integer id, RedirectAttributes redirectAttributes) {
        postService.deletePost(id);
        redirectAttributes.addFlashAttribute("message", "Post deleted successfully!");
        return "redirect:/posts";
    }

    @GetMapping("/post/update")
    @ResponseBody
    public String showUpdateForm(@RequestParam("id") Integer id) throws Exception {
        Post post = postService.getPostById(id);
        return "update-post";
    }
    @PostMapping(value = "/post/update")
    @ResponseBody
    public String updatePost(@RequestParam("id") Integer id, RedirectAttributes redirectAttributes) throws Exception {
        postService.updatePost(postService.getPostById(id));
        redirectAttributes.addFlashAttribute("message", "Post updated successfully!");
        return "redirect:/post/?id=" + id;
    }
    @GetMapping("/post")
    @ResponseBody
    public Post getPostById(@RequestParam("id") Integer id) throws Exception {
        Post post = postService.getPostById(id);
        return post;
    }
}
