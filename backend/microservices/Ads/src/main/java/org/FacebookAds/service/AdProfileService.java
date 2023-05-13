package org.FacebookAds.service;

import org.FacebookAds.mapper.AdProfileMapper;
import org.FacebookAds.model.dto.AdProfileDto;
import org.FacebookAds.model.entity.Ad;
import org.FacebookAds.model.entity.AdProfile;
import org.FacebookAds.model.entity.Keyword;
import org.FacebookAds.repository.AdProfileRepository;
import org.FacebookAds.repository.KeywordRepository;
import org.FacebookAds.util.UserToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AdProfileService {
    private final AdProfileRepository adProfileRepository;
    private final KeywordRepository keywordRepository;

    @Autowired
    public AdProfileService(AdProfileRepository adProfileRepository, KeywordRepository keywordRepository) {
        this.adProfileRepository = adProfileRepository;
        this.keywordRepository = keywordRepository;
    }

    public List<AdProfileDto> getAllProfiles() {
        return adProfileRepository.findAll().stream().map(AdProfileMapper::toDto).toList();
    }

    public AdProfile getOneProfile(Integer userId) {
        return adProfileRepository.findByUserId(userId);
    }


    public void updateAdProfile(List<UserToken> userTokenList, Integer adProfileId) {
        List<Keyword> keywordList = keywordRepository.findByProfileId(adProfileId);

        for (UserToken userToken : userTokenList) {
            Keyword keyword = checkIfExists(keywordList, userToken);
            if (userToken.getScore() == 0) {
                userToken.setScore(0.5);
            }

            if (keyword != null) {
                //ad exists -> update
                int frequency = keyword.getFrequency() + 1;
                double sentimentScore = keyword.getSentimentScore();
                double score = keyword.getScore();

                double alpha = 0.2;

                //calc new score
                sentimentScore = (sentimentScore + userToken.getScore()) * 0.5;
                score = (alpha * score) + (sentimentScore * Math.pow(frequency, 2) + userToken.getScore()) / (frequency + 1);
                keywordRepository.updateKeyword(adProfileId, userToken.getLemma(), frequency, sentimentScore, score);
            } else {
                //ad doesn't exist -> add key
                int frequency = 1;
                keywordRepository.addKeyword(adProfileId,
                        userToken.getLemma(),
                        frequency,
                        userToken.getScore(),
                        userToken.getScore());
            }
        }
    }

    private Keyword checkIfExists(List<Keyword> keywordList, UserToken userToken) {
        for (Keyword keyword : keywordList) {
            if (keyword.getWord().equals(userToken.getLemma())) {
                return keyword;
            }
        }
        return null;
    }
}
