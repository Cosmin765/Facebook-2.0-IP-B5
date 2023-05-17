package org.Facebook.service;

import org.Facebook.model.entity.PostImage;
import org.Facebook.repository.PostImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostImageService {

    @Autowired
    private PostImageRepository postImageRepository;

    public List<PostImage> findAllImagesByPost(Integer id) {
        return postImageRepository.findAllImagesByPost(id);
    }

    public List<PostImage> findAllImages() {
        return postImageRepository.findAllImages();
    }

    public PostImage findImageById(Integer id) {
        PostImage postImage = postImageRepository.findImageById(id);
        if (postImage == null) {
            throw new RuntimeException("Image not found");
        }
        return postImage;
    }
}
