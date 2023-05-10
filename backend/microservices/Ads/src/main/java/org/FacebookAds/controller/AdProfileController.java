    package org.FacebookAds.controller;

    import org.FacebookAds.model.dto.AdProfileDto;
    import org.FacebookAds.model.entity.Ad;
    import org.FacebookAds.model.entity.AdProfile;
    import org.FacebookAds.service.AdProfileService;
    import org.FacebookAds.service.RecommendService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

    @RestController
    public class AdProfileController {
        @Autowired
        private AdProfileService adProfileService;
        @Autowired
        private RecommendService recommendService;

        @GetMapping(value = "/adProfiles")
        public List<AdProfileDto> adProfile() {
            return adProfileService.getAllProfiles();
        }

        @GetMapping(value = "/adProfile")
        public AdProfile adProfileSing(@RequestParam("value") String value) {
            int idVal = Integer.parseInt(value);
            return adProfileService.getOneProfile(idVal);
        }

        @GetMapping(value = "/ads/recommended")
        public List<Ad> adProfile(@RequestParam("userId") Integer userId) {
            return recommendService.getRecommendedAds(userId);
        }

    }
