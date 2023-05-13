package org.Facebook.service;

import org.Facebook.model.entity.Like;
import org.Facebook.repository.LikeRepository;
import org.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepository;
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    public List<Like> getAllLikes() {
        return likeRepository.findAllLikesDesc();
    }

    public void deletePost(Integer id) {
        likeRepository.deleteById(id);
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

}
