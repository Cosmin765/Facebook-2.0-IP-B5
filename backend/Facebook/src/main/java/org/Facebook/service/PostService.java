package org.Facebook.service;

import org.Facebook.model.entity.Post;
import org.Facebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
}
