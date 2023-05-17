package org.FacebookAds.controller;

import org.FacebookAds.service.CloudflareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class CloudflareController {
    @Autowired
    CloudflareService cloudflareService;

    //TODO remove after debugging
    @GetMapping("/upload")
    public String testForm() {
        return "uploadForm";
    }

    @GetMapping("cloudflare/download")
    @ResponseBody
    public ResponseEntity<String> downloadFile(@RequestParam String file) {
        return cloudflareService.downloadFile(file);
    }

    @PostMapping("cloudflare/upload")
    @ResponseBody
    public ResponseEntity<String> uploadFile(@RequestParam MultipartFile file) {
        return cloudflareService.uploadFile(file);
    }

    @PostMapping("/cloudflare/delete")
    @ResponseBody
    public ResponseEntity<String> deleteFile(@RequestParam String file) {
        return cloudflareService.deleteFile(file);
    }
}