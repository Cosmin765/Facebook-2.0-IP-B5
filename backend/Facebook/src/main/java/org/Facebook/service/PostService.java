package org.Facebook.service;

import org.Facebook.mapper.PostMapper;
import org.Facebook.model.dto.PostDto;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.Facebook.repository.PostRepository;
import org.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAllPostsDesc();
    }

    public void createPost(PostDto postDto) {
        Post post = PostMapper.fromDto(postDto);
        User user = userRepository.getById(postDto.getUserId());
        post.setUser(user);

        postRepository.save(post);
    }

    public void deletePost(Integer id) {
        postRepository.deleteById(id);
    }

    public void updatePost(Post post) {
        postRepository.save(post);
    }

    public Post getPostById(Integer id) throws Exception {
        Post post = postRepository.findByPostId(id);
        if (post == null)
            throw new Exception("Post not found.");
        return post;
    }

    public List<Post> getPostsByUsername(String email) throws Exception {
        List<Post> posts = postRepository.findByEmail(email);
        if (posts == null)
            throw new Exception("No posts found.");
        return posts;
    }

    public List<Post> getPostsByName(String name) throws Exception {
        List<Post> posts = postRepository.findByName(name);
        if (posts == null)
            throw new Exception("No posts found.");
        return posts;
    }

    public List<Post> getPostsByUserId(Integer id) throws Exception {
        List<Post> posts = postRepository.findByUserId(id);
        if (posts == null)
            throw new Exception("No posts found.");
        return posts;
    }

    public int getNumberOfLikes(Integer id) {
        return postRepository.getNumberOfLikes(id);
    }
}
