package org.Facebook.service;

import org.Facebook.mapper.LikeMapper;
import org.Facebook.model.dto.LikeDto;
import org.Facebook.model.entity.Like;
import org.Facebook.repository.LikeRepository;
import org.Facebook.repository.PostRepository;
import org.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Like> getAllLikes() {
        return likeRepository.findAllLikesDesc();
    }

    public Like getLikesById(Integer id) throws Exception {
        Like like = likeRepository.findByLikeId(id);
        if (like == null)
            throw new Exception("Like not found.");
        return like;
    }
    public List<Like> getLikesByUserId(Integer id) throws Exception {
        List<Like> like = likeRepository.findByUserId(id);
        if (like == null)
            throw new Exception("No Likes found.");
        return like;
    }
    public List<Like> getLikesByPostId(Integer id) throws Exception {
        List<Like> like = likeRepository.findByPostId(id);
        if (like == null)
            throw new Exception("No Likes found.");
        return like;
    }

    public int getNumberOfLikes(Integer id) {
        return likeRepository.getNumberOfLikes(id);
    }

    public Like like(LikeDto likeDto) {
        Like like = LikeMapper.fromDto(likeDto);
        like.setUser(userRepository.getById(likeDto.getUserId()));
        like.setPostId(likeDto.getPostId());
        return likeRepository.save(like);
    }

    public boolean unlike(Integer likeId) {
        Optional<Like> like = likeRepository.findById(likeId);
        if(like.isEmpty()) {
            return false;
        }
        likeRepository.delete(like.get());
        return true;
    }
}
