package org.Facebook.controller;

import org.Facebook.mapper.PostImageMapper;
import org.Facebook.mapper.PostMapper;
import org.Facebook.model.dto.PostDto;
import org.Facebook.model.dto.PostImageDto;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.PostImage;
import org.Facebook.repository.PostImageRepository;
import org.Facebook.repository.PostRepository;
import org.Facebook.service.PostService;
import org.Facebook.util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

//@RestController
@Controller
public class PostController {
    @Autowired
    private PostService postService;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private PostImageRepository postImageRepository;


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
    public void createPost(@ModelAttribute PostDto postDto, @RequestParam(value = "image", required = false) List<MultipartFile> images, RedirectAttributes redirectAttributes) throws Exception {
        postDto.setPostImages(new ArrayList<>());
        postDto.setLikes(new ArrayList<>());
        postDto.setComments(new ArrayList<>());
        if (images != null && !images.isEmpty()) {
            postDto.setPostImages(new ArrayList<>());
            for (MultipartFile image : images) {
                if (image.isEmpty()) continue;
                String fileName = UUID.randomUUID().toString() + "-" + image.getOriginalFilename();
                String uploadDir = "/images/";
                FileUploadUtil.saveFile(uploadDir, fileName, image);
                PostImage postImage = new PostImage();
                postImage.setImageLink("/images/" + fileName);
                postDto.getPostImages().add(PostImageMapper.toDto(postImage));
            }
        };
        postService.createPost(postDto);
        //redirectAttributes.addFlashAttribute("message", "Post created successfully!");
        //return new RedirectView("/posts/recommended?count=10&cursor=0");
    }

//    @GetMapping("/posts/new")
//    //   @ResponseBody
//    public String showCreateForm(Model model) {
//        System.out.println("AICICICdddddI");
//        model.addAttribute("post", new Post());
//        return "create-post";
//    }

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
        if (!postDto.getContent().equals(""))
            post.setContent(postDto.getContent());
        if (!postDto.getLocation().equals(""))
            post.setLocation(postDto.getLocation());
        if (!postDto.getLocation().equals(""))
            post.setStatus(postDto.getLocation());
        postService.updatePost(post);
        redirectAttributes.addFlashAttribute("message", "Post updated successfully!");
        return new RedirectView("/post?id=" + id);
    }

    @GetMapping("/post")
    @ResponseBody
    public Post getPostById(@RequestParam("id") Integer id) throws Exception {
        return postService.getPostById(id);
    }
}
