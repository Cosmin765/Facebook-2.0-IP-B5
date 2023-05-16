package org.FacebookAds.controller;

import org.FacebookAds.service.CloudflareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;

@Controller
public class FileDownloadController {
    @Autowired
    private CloudflareService cloudflareService;

    @GetMapping("/cloudflare/download")
    @ResponseBody
    public String handleDownload(@RequestParam("file") String file) {
        return cloudflareService.download(file);
    }
}
