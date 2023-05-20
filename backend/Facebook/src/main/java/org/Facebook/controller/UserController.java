package org.Facebook.controller;

import org.Facebook.mapper.FriendRequestMapper;
import org.Facebook.mapper.UserMapper;
import org.Facebook.model.dto.FriendRequestDto;
import org.Facebook.model.entity.FriendRequest;
import org.Facebook.model.entity.Friendship;
import org.Facebook.model.entity.User;
import org.Facebook.model.dto.UserDto;
import org.Facebook.repository.FriendshipRepository;
import org.Facebook.service.FriendRequestService;
import org.Facebook.service.FriendshipService;
import org.Facebook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

//@RestController
@Controller
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private FriendRequestService friendRequestService;
    @Autowired
    private FriendshipService friendshipService;
    @Autowired
    private FriendshipRepository friendshipRepository;

    @PostMapping(value = "/register")
    @ResponseBody
    public RedirectView registerUser(@ModelAttribute User user) {
        userService.registerUser(user);
        return new RedirectView("http://localhost:3000/login");
    }

    @GetMapping(value = "/users")
    @ResponseBody
    public List<UserDto> getUsers() {
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

    @GetMapping(value = "/suggestions")
    @ResponseBody
    public List<UserDto> getSuggestions(@RequestParam Integer count) {
        return userService.getSuggestions(count).stream().map(UserMapper::toDto).toList();

    }

    /*@GetMapping("/suggestions")
    public String getSuggestionsPage(Model model) {
        return "suggestions";
    }*/

    @GetMapping(value = "/")
    @ResponseBody
    public String getWelcome() {
        return "Hello world!";
    }

    @GetMapping(value = "/getOwnId")
    @ResponseBody
    public UserDto getOwnId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = UserMapper.toDto((User) auth.getPrincipal());
        return user;
    }

    @GetMapping(value = "/friendRequests")
    @ResponseBody
    public List<FriendRequestDto> getFriendRequests() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = UserMapper.toDto((User) auth.getPrincipal());
        return friendRequestService.getFriendRequestsByUser(user).stream().map(FriendRequestMapper::toDto).toList();
    }

    @PostMapping(value = "/friendRequest")
    @ResponseBody
    public FriendRequestDto updateFriendReq(@RequestParam Integer id, @RequestParam String status) {
        FriendRequestDto friendRequestDto = FriendRequestMapper.toDto(friendRequestService.updateR(id, status));

        if (status.equals("accepted")) {
            Friendship friendship = Friendship.builder()
                    .user1(UserMapper.fromDto(friendRequestDto.getReceiver()))
                    .user2(UserMapper.fromDto(friendRequestDto.getSender()))
                    .build();
            friendshipService.addFriendship(friendship);
        }

        return friendRequestDto;
    }

    @PostMapping(value = "/addFriendRequest")
    @ResponseBody
    public FriendRequestDto addFriendRequest(@RequestParam Integer id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = UserMapper.toDto((User) auth.getPrincipal());

        return FriendRequestMapper.toDto(friendRequestService.saveFriendRequest(user.getId(), id, "pending"));
    }

    @PostMapping(value = "/setLogged")
    @ResponseBody
    public UserDto setLogged(@RequestParam boolean value) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = UserMapper.toDto((User) auth.getPrincipal());

        return UserMapper.toDto(userService.setLoggedIn(user.getId(), value));
    }

    @GetMapping(value = "/getLoggedFriends")
    @ResponseBody
    public List<UserDto> getLoggedFriends(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = UserMapper.toDto((User) auth.getPrincipal());

        List<Friendship> friendshipList = userService.getFriendshipsOnline(user.getId());
        List<UserDto> userDtoList = new ArrayList<>();

        for (Friendship friendship : friendshipList){
            userDtoList.add(UserMapper.toDto(friendship.getUser2()));
        }

        return userDtoList;
    }
}
