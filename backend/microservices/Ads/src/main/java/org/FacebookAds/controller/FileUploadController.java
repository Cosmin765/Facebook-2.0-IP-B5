package org.FacebookAds.controller;

import org.FacebookAds.service.CloudflareService;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.security.MessageDigest;
import java.util.Base64;
import java.util.Objects;

@Controller
public class FileUploadController {
    @Autowired
    private CloudflareService cloudflareService;

    @GetMapping("/upload")
    public String testForm() {
        return "uploadForm";
    }

    @PostMapping("/cloudflare/upload")
    @ResponseBody
    public boolean handleUpload(@RequestParam("file") MultipartFile file, @RequestParam("file") String message) {
        System.out.println(message);
        return cloudflareService.upload(file);
    }
}
