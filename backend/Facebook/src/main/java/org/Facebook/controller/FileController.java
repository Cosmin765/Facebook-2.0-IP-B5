package org.Facebook.controller;

import org.Facebook.service.CloudflareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class FileController {
    @Autowired
    private CloudflareService cloudflareService;

    @GetMapping("/cloudflare/download")
    @ResponseBody
    public String handleDownload(@RequestParam("file") String file) {
        return cloudflareService.download(file);
    }

    @DeleteMapping("/cloudflare/delete")
    @ResponseBody
    public boolean handleDelete(@RequestParam("file") String file) {
        return cloudflareService.delete(file);
    }

    @PostMapping("/cloudflare/upload")
    @ResponseBody
    public String handleUpload(@RequestParam("file") MultipartFile file) {
        try {
            return cloudflareService.upload(file);
        } catch (Exception ignored) {
            return "Not uploaded";
        }
    }

    @GetMapping("/upload")
    public String testForm() {
        return "uploadForm";
    }
}
