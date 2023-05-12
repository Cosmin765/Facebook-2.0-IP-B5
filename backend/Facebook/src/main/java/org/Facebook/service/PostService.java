package org.Facebook.service;

import org.Facebook.mapper.PostMapper;
import org.Facebook.mapper.UserMapper;
import org.Facebook.model.dto.PostDto;
import org.Facebook.model.dto.UserDto;
import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.Facebook.repository.PostRepository;
import org.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CommentService commentService;


    public List<Post> getAllPosts() {
        return postRepository.findAllPostsDesc();
    }

    public void createPost(PostDto postDto) {
        Post post = PostMapper.fromDto(postDto);
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = UserMapper.toDto((User) auth.getPrincipal());
        User user = userRepository.findByEmail(userDto.getEmail());
        post.setUser(user);
        postDto.getImages().forEach(postImage -> postImage.setPost(post));
        postRepository.save(post);
    }

    public void deletePost(Integer id) throws Exception {
        List<Comment> comments = new ArrayList<>();
        try {
            comments = commentService.getCommentsByPost(getPostById(id));
        } catch (Exception e) {
            throw new Exception("Post not found.");
        }
        for (Comment comment : comments) {
            commentService.deleteComment(comment.getId());
        }
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

    public List<Post> getRecommendedPosts(Integer count, Integer cursor) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = UserMapper.toDto((User) auth.getPrincipal());
        List<UserDto> friends = userService.getFriends(user.getId()).stream().map(UserMapper::toDto).toList();

        List<Integer> userIds = friends.stream().map(UserDto::getId).toList();
        List<Post> posts = postRepository.findByUsersLimit(userIds, count, cursor);
        return posts;
    }
}
