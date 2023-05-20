package org.Facebook.controller;

import org.Facebook.mapper.LikeMapper;
import org.Facebook.model.dto.LikeDto;
import org.Facebook.model.entity.Like;
import org.Facebook.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class LikeController {
    @Autowired
    private LikeService likeService;


    @GetMapping("/likes")
    @ResponseBody
    public Like getLikeById(@RequestParam("id") Integer id) throws Exception {
        return likeService.getLikesById(id);
    }

    @GetMapping("/likes/post")
    @ResponseBody
    public List<Like> getPostLikes(@RequestParam("id") Integer id) throws Exception {
        return likeService.getLikesByPostId(id);
    }

    @PostMapping("/likes")
    @ResponseBody
    public LikeDto like(@RequestParam("postId") Integer postId, @RequestParam("userId") Integer userId) {
        LikeDto likeDto = LikeDto.builder().postId(postId).userId(userId).build();
        return LikeMapper.toDto(likeService.like(likeDto));
    }

    @DeleteMapping("/likes")
    @ResponseBody
    public boolean unlike(@RequestParam("likeId") Integer likeId) {
        return likeService.unlike(likeId);
    }
}
