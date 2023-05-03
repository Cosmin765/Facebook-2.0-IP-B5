package org.Facebook.controller;

import org.Facebook.mapper.UserMapper;
import org.Facebook.model.dto.UserDto;
import org.Facebook.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Controller
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping(value = "/graph")
    public String graph(Model model, @RequestParam int userId, @RequestParam int level) {
        var tempData = adminService.getFriendshipGraph(userId, level);
        Set<Pair<UserDto, UserDto>> links = tempData.getFirst().stream().map(p ->
                Pair.of(UserMapper.toDto(p.getFirst()), UserMapper.toDto(p.getSecond()))).collect(Collectors.toSet());
        Pair<Set<Pair<UserDto, UserDto>>, Map<Integer, Integer>> graphData = Pair.of(links, tempData.getSecond());
        model.addAttribute("graphData", graphData);
        return "graph";
    }
}
