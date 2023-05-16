package org.FacebookAds.controller;

import org.FacebookAds.service.CloudflareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@Controller
public class FileDeleteController {
    @Autowired
    private CloudflareService cloudflareService;

    @DeleteMapping("/cloudflare/delete")
    @ResponseBody
    public boolean handleDelete(@RequestParam("file") String file) {
        return cloudflareService.delete(file);
    }
}