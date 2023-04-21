package org.Facebook.controller;

import org.Facebook.mapper.UserMapper;
import org.Facebook.model.entity.User;
import org.Facebook.model.dto.UserDto;
import org.Facebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
@Controller
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping(value="/register")
    public void registerUser(@RequestBody User user) {
        userService.registerUser(user);
    }
    @GetMapping(value = "/users")
    @ResponseBody
    public List<UserDto> getUsers(){
        return userService.getUsers();
    }
    @GetMapping(value = "/friends")
    @ResponseBody
    public List<UserDto> getFriends(@RequestParam int userId) {
        return userService.getFriends(userId).stream().map(UserMapper::toDto).toList();
    }
    @GetMapping(value = "/")
    @ResponseBody
    public String getWelcome(){
        return "Hello world!";
    }
}
