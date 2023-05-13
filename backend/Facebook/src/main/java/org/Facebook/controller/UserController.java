package org.Facebook.controller;

import org.Facebook.mapper.UserMapper;
import org.Facebook.model.entity.User;
import org.Facebook.model.dto.UserDto;
import org.Facebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

//@RestController
@Controller
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping(value="/register")
    @ResponseBody
    public RedirectView registerUser(@ModelAttribute User user) {
        userService.registerUser(user);
        return new RedirectView("http://localhost:3000/login");
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

    @GetMapping("/users/search")
    @ResponseBody
    public List<UserDto> searchUsers(@RequestParam String name) {
        return userService.searchUsers(name).stream().map(UserMapper::toDto).toList();
    }

    @PostMapping(value = "/suggestions")
    @ResponseBody
    public List<UserDto> getSuggestions(@RequestParam Integer count) {
        return userService.getSuggestions(count).stream().map(UserMapper::toDto).toList();

    }

    @GetMapping("/suggestions")
    public String getSuggestionsPage(Model model) {
        return "suggestions";
    }

    @GetMapping(value = "/")
    @ResponseBody
    public String getWelcome(){
        return "Hello world!";
    }
}
