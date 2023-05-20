package org.Facebook.service;

import java.util.List;

import org.Facebook.mapper.PostImageMapper;
import org.Facebook.model.dto.PostImageDto;
import org.Facebook.model.entity.PostImage;
import org.Facebook.repository.PostImageRepository;
import org.Facebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostImageService {

    @Autowired
    private PostImageRepository postImageRepository;
    @Autowired
    private PostRepository postRepository;

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

    public void createPostImage(PostImageDto postImageDto) {
        PostImage postImage = PostImageMapper.fromDto(postImageDto);
        postImage.setPost(postRepository.getById(postImageDto.getPostId()));
        postImageRepository.save(postImage);
    }
}
