package org.example.Facebook.controller;

import org.example.Facebook.model.User;
import org.example.Facebook.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
 @Autowired
    private UserService userService;
    @PostMapping(value="/register")
    public  void registerUser(@RequestBody User user) {
        userService.registerUser(user);
    }
    @GetMapping(value = "/users")
    public List<User> getUsers(){
return userService.getUsers();
    }
    @GetMapping(value = "/welcome")
    public String getWelcome(){
        return "Hello world";
    }
}
