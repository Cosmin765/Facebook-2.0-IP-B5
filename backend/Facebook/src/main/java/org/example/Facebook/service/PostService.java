package org.example.Facebook.service;

import org.example.Facebook.model.entity.Post;
import org.example.Facebook.repository.CommentRepository;
import org.example.Facebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
}
