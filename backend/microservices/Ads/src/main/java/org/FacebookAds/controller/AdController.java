package org.FacebookAds.controller;

import org.FacebookAds.model.entity.User;
import org.FacebookAds.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class AdController {
    @Autowired
    private AdService adService;

    @PostMapping(value = "/create_ad")
    @ResponseBody
    public void createAdCompany(@RequestParam User publisher, @RequestParam String title, @RequestParam String imageLink, String link, @RequestParam String content, @RequestParam String keywords) {
        adService.createAd(publisher, title, imageLink, link, content, keywords);
    }

    @PostMapping(value = "/delete_ad")
    @ResponseBody
    public void deleteAdCompany(@RequestParam Integer id) {
        adService.deleteAd(id);
    }

//    @PostMapping(value = "/update_ad")
//    @ResponseBody
//    public void updateAdCompany(@RequestParam Integer id, @RequestParam(required = false) Integer newAdCompanyId, @RequestParam(required = false) String newName, @RequestParam(required = false) String newImage, @RequestParam(required = false) String newDescription, @RequestParam(required = false) String newKeywords) {
//        adService.updateAd(id, newAdCompanyId, newName, newImage, newDescription, newKeywords);
//    }

    @GetMapping(value = "/check_ad_stats")
    @ResponseBody
    public Map<String, Integer> checkAdStats(@RequestParam Integer id) {
        Map<String, Integer> json = new HashMap<>();
//        json.put("impressions", adService.checkImpressions(id));
        json.put("clicks", adService.checkClicks(id));
        return json;
    }
}