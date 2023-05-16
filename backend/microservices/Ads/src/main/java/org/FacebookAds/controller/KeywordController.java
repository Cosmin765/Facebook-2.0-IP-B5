package org.FacebookAds.controller;

import org.FacebookAds.model.dto.KeywordDto;
import org.FacebookAds.model.entity.Keyword;
import org.FacebookAds.service.AdProfileService;
import org.FacebookAds.service.KeywordExtractor;
import org.FacebookAds.service.KeywordExtractorService;
import org.FacebookAds.service.KeywordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KeywordController {
    @Autowired
    private KeywordService keywordService;
    @Autowired
    private KeywordExtractorService keywordExtractorService;

    @Autowired
    private AdProfileService adProfileService;

    @GetMapping(value = "/keys")
    public List<KeywordDto> getAllKeys() {
        return keywordService.getAllKeywords();
    }

    @GetMapping(value = "/key")
    public List<Keyword> getKeyByAdProfId(@RequestParam("value") Integer value) {
        return keywordService.getKeyByProfile(value);
    }

    //test for keyExt
    @GetMapping(value = "/test")
    public List<Keyword> test() {
        //KeywordExtractor keywordExtractor = new KeywordExtractor(adProfileService);
        //keywordExtractor.analyzeMessage("I really like cars.",3);

        keywordExtractorService.processUserInput("I really like cars.",3);
        return keywordService.getKeyByProfile(3);
    }
}
