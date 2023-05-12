package org.Facebook.controller;

import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.PostImage;
import org.Facebook.service.PostImageService;
import org.Facebook.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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

    @GetMapping("/image")
    public ResponseEntity<byte[]> getImage(@RequestParam("id") Integer imageId) throws IOException, IOException {
        PostImage postImage = postService.findImageById(imageId);
        Path imagePath = Paths.get(postImage.getImageLink());
        byte[] data =  Files.readAllBytes(imagePath);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Replace with the appropriate image type if needed

        return new ResponseEntity<>(data, headers, HttpStatus.OK);
    }

    @GetMapping("/images/post")
    public ResponseEntity<byte[]> getPostImage(
            @RequestParam("id") Integer postId,
            @RequestParam("index") Integer imageIndex) throws IOException {
        List<PostImage> postImages = postService.findAllImagesByPost(postId);

        if (imageIndex >= 0 && imageIndex < postImages.size()) {
            PostImage postImage = postImages.get(imageIndex);
            Path imagePath = Paths.get(postImage.getImageLink());
            byte[] imageData = Files.readAllBytes(imagePath);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG);

            return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
        } else {
            throw new IllegalArgumentException("Invalid image index");
        }
    }




}
