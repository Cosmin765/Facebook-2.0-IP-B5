package org.FacebookAds.controller;

import org.FacebookAds.model.dto.AdProfileDto;
import org.FacebookAds.model.entity.AdProfile;
import org.FacebookAds.service.AdProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdProfileController {
    @Autowired
    private AdProfileService adProfileService;

    @GetMapping(value = "/adProfiles")
    public List<AdProfileDto> adProfile() {
        return adProfileService.getAllProfiles();
    }

    @GetMapping(value = "/adProfile")
    public AdProfile adProfileSing(@RequestParam("value") String value){
        int idVal = Integer.parseInt(value);
        return adProfileService.getOneProfile(idVal);
    }

}
