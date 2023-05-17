package org.FacebookAds.controller;

import org.FacebookAds.model.entity.Ad;
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
    public Ad createAd(Ad ad) {
        return adService.createAd(ad);
    }

    @PostMapping(value = "/delete_ad")
    @ResponseBody
    public void deleteAd(@RequestParam Integer id) {
        adService.deleteAd(id);
    }

    @PostMapping(value = "/update_ad")
    @ResponseBody
    public void updateAd(@RequestParam Integer id, Ad newAd) {
        adService.updateAd(id, newAd);
    }

    @GetMapping(value = "/check_ad_stats")
    @ResponseBody
    public Map<String, Integer> checkAdStats(@RequestParam Integer id) {
        Map<String, Integer> json = new HashMap<>();
        json.put("impressions", adService.checkImpressions(id));
        json.put("clicks", adService.checkClicks(id));
        return json;
    }
}