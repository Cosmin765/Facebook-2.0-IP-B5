package org.Facebook.controller;

import org.Facebook.mapper.PostMapper;
import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.Like;
import org.Facebook.model.entity.Post;
import org.Facebook.repository.PostRepository;
import org.Facebook.service.CommentService;
import org.Facebook.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

//@RestController
@Controller
public class PostController {
    @Autowired
    private PostService postService;
    @Autowired
    private PostRepository postRepository;


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
    public RedirectView createPost(@RequestParam String content, @RequestParam String adLocation, @RequestParam String adStatus, RedirectAttributes redirectAttributes) {
        PostDto postDto = PostDto.builder()
                .content(content)
                .adLocation(adLocation)
                .adStatus(adStatus)
                .build();
        postService.createPost(postDto);
        redirectAttributes.addFlashAttribute("message", "Post created successfully!");
        return new RedirectView("/posts/recommended?count=10&cursor=0");
    }

    @GetMapping("/posts/new")
    //   @ResponseBody
    public String showCreateForm(Model model) {
        model.addAttribute("post", new Post());
        return "create-post";
    }

    @GetMapping("/post/delete")
    //@ResponseBody
    public String showDeleteForm(Model model) throws Exception {
        return "delete-post";
    }

    @PostMapping("/post/delete")
    @ResponseBody
    public RedirectView deletePost(@RequestParam("id") Integer id, RedirectAttributes redirectAttributes) throws Exception {
        postService.deletePost(id);
        redirectAttributes.addFlashAttribute("message", "Post deleted successfully!");
        return new RedirectView("/posts/recommended?count=10&cursor=0");
    }

    @GetMapping("/post/update")
    //@ResponseBody
    public String showUpdateForm() {
        return "update-post";
    }

    @PostMapping(value = "/post/update")
    @ResponseBody
    public RedirectView updatePost(@RequestParam("id") Integer id, @RequestBody PostDto postDto, RedirectAttributes redirectAttributes) throws Exception {
        Post post = postService.getPostById(id);
        if (postDto.getContent() != "")
            post.setContent(postDto.getContent());
        if (postDto.getAdLocation() !="")
            post.setAdLocation(postDto.getAdLocation());
        if (postDto.getAdStatus() != "")
            post.setAdStatus(postDto.getAdStatus());
        postService.updatePost(post);
        redirectAttributes.addFlashAttribute("message", "Post updated successfully!");
        return new RedirectView("/post?id=" + id);
    }

    @GetMapping("/post")
    @ResponseBody
    public Post getPostById(@RequestParam("id") Integer id) throws Exception {
        Post post = postService.getPostById(id);
        return post;
    }


}
