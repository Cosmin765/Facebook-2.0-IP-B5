package org.FacebookAds.service;

import org.FacebookAds.model.entity.Ad;
import org.FacebookAds.model.entity.Keyword;
import org.FacebookAds.repository.AdProfileRepository;
import org.FacebookAds.repository.AdRepository;
import org.FacebookAds.repository.KeywordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RecommendService {
    @Autowired
    private KeywordRepository keywordRepository;
    @Autowired
    private AdProfileRepository adProfileRepository;
    @Autowired
    private AdRepository adRepository;

    public static double cosineSimilarity(Map<String, Integer> userKeywords, Map<String, Integer> adKeywords) {

        Set<String> uniqueKeywords = new HashSet<>();
        uniqueKeywords.addAll(userKeywords.keySet());
        uniqueKeywords.addAll(adKeywords.keySet());

        double dotProduct = 0.0;
        double userMagnitude = 1.0;
        double adMagnitude = 1.0;
        for (String keyword : uniqueKeywords) {
            int userCount = userKeywords.getOrDefault(keyword, 0);
            int adCount = adKeywords.getOrDefault(keyword, 0);
            dotProduct += userCount * adCount;
            userMagnitude += userCount * userCount;
            adMagnitude += adCount * adCount;
        }

        // cosine sim
        double magnitudeProduct = Math.sqrt(userMagnitude) * Math.sqrt(adMagnitude);
        if (magnitudeProduct == 0.0) {
            return 0.0;
        } else {
            return dotProduct / magnitudeProduct;
        }
    }

    public List<Ad> getRecommendedAds(Integer userId) {
        Integer adProfileId = adProfileRepository.getAdProfileIdByUserId(userId);
           /* keywordRepository.addKeyword(1,"eligendi",1,1.0,0.8);
            keywordRepository.addKeyword(1,"fugifat",2,2.0,0.9);*/
        List<Keyword> keywordList = keywordRepository.getTopKeywordsByAdProfileId(adProfileId);//take top keywords for userId
        Map<String, Integer> userKeywords = new HashMap<>();
        for (Keyword keyword : keywordList) {
            String word = keyword.word;
            userKeywords.put(word, 1);
        }
        List<Ad> allAds = adRepository.getAllAds();
        Map<Ad, Double> map = new HashMap<>();

        for (Ad ad : allAds) {
            List<String> adsKeywords = ad.getAdKeywords().stream().map(keyword -> keyword.word).toList();
            Map<String, Integer> adKeywords = new HashMap<>();
            for (String keyword : adsKeywords) {
                adKeywords.put(keyword, 1);
            }
            double similarity = cosineSimilarity(userKeywords, adKeywords);
            map.put(ad, similarity);


            //iau keywordurile cu cele mai mari scoruri si fac cosine similarity cu fiecare keywords din ads
        }
        List<Map.Entry<Ad, Double>> list = new ArrayList<>(map.entrySet());
        list.sort((o1, o2) -> Double.compare(o2.getValue(), o1.getValue()));
        Map<Ad, Double> sortedMap = new LinkedHashMap<>();
        for (Map.Entry<Ad, Double> entry : list) {
            sortedMap.put(entry.getKey(), entry.getValue());
        }
        List<Ad> adsSorted = new ArrayList<>();
        for (Map.Entry<Ad, Double> entry : sortedMap.entrySet()) {
            if (entry.getValue() > 0) {
                adsSorted.add(entry.getKey());
            }
        }
        return adsSorted;

    }

}
