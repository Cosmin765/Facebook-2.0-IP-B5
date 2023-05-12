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
        Like like = likeService.getLikesById(id);
        return like;
    }

    @GetMapping("/likes/post")
    @ResponseBody
    public List<Like> getPostLikes(@RequestParam("id") Integer id) throws Exception {
        List<Like> likes = likeService.getLikesByPostId(id);
        return likes;
    }

}
