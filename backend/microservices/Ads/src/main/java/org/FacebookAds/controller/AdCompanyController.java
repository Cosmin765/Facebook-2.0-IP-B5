package org.FacebookAds.controller;

import org.FacebookAds.service.AdCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class AdCompanyController {
    @Autowired
    private AdCompanyService adCompanyService;

    @PostMapping(value = "/create_ad_company")
    @ResponseBody
    public void createAdCompany(@RequestParam String name, @RequestParam String description) {
        adCompanyService.createAdCompany(name, description);
    }

    @PostMapping(value = "/delete_ad_company")
    @ResponseBody
    public void deleteAdCompany(@RequestParam Integer id) {
        adCompanyService.deleteAdCompany(id);
    }

    @PostMapping(value = "/update_ad_company")
    @ResponseBody
    public void updateAdCompany(@RequestParam Integer id, @RequestParam(required = false) String newName, @RequestParam(required = false) String newDescription) {
        adCompanyService.updateAdCompany(id, newName, newDescription);
    }

    @GetMapping(value = "/check_company_stats")
    @ResponseBody
    public Map<String, Integer> checkAdStats(@RequestParam Integer id) {
        Map<String, Integer> json = new HashMap<>();
        json.put("impressions", adCompanyService.checkImpressions(id));
        json.put("clicks", adCompanyService.checkClicks(id));
        return json;
    }
}