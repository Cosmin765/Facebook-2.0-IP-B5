package org.FacebookAds.controller;

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
    public void createAdCompany(@RequestParam Integer adCompanyId, @RequestParam String name, @RequestParam String image, @RequestParam String description, @RequestParam String keywords) {
        adService.createAd(adCompanyId, name, image, description, keywords);
    }

    @PostMapping(value = "/delete_ad")
    @ResponseBody
    public void deleteAdCompany(@RequestParam Integer id) {
        adService.deleteAd(id);
    }

    @PostMapping(value = "/update_ad")
    @ResponseBody
    public void updateAdCompany(@RequestParam Integer id, @RequestParam(required = false) Integer newAdCompanyId, @RequestParam(required = false) String newName, @RequestParam(required = false) String newImage, @RequestParam(required = false) String newDescription, @RequestParam(required = false) String newKeywords) {
        adService.updateAd(id, newAdCompanyId, newName, newImage, newDescription, newKeywords);
    }

    @GetMapping(value = "/check_stats")
    @ResponseBody
    public Map<String, Integer> checkAdStats(@RequestParam Integer id) {
        Map<String, Integer> json = new HashMap<>();
        json.put("clicks", adService.checkStats(id));
        return json;
    }
}