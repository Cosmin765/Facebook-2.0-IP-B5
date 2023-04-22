package org.Facebook.controller;

import org.Facebook.service.AdCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AdCompanyController {
    @Autowired
    private AdCompanyService adCompanyService;

    @PostMapping(value="/create_ad")
    public void createAd(@RequestParam String title) {
        adCompanyService.createAd(title);
    }

    @PostMapping(value="/delete_ad")
    public void deleteAd(@RequestParam(name = "id") int adId) {
        adCompanyService.deleteAd(adId);
    }

    @GetMapping(value="/check_ad_stats")
    @ResponseBody
    public String checkAdStats(@RequestParam(name = "id") int adId) {
        return adCompanyService.checkStats(adId).toString() + " clicks";
    }
}