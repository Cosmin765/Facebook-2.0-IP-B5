package org.FacebookConversations.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StaticController {
    @GetMapping("/conversation")
    public String conversations(Model model) {
        return "test";
    }
}
