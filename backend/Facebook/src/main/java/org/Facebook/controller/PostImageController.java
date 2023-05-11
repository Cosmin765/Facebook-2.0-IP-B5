package org.Facebook.controller;

import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.PostImage;
import org.Facebook.service.PostImageService;
import org.Facebook.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class PostImageController {
    @Autowired
    private PostImageService postService;

    @GetMapping(value = "/images")
    @ResponseBody
    public List<PostImage> posts() {
        return postService.findAllImages();
    }


}
