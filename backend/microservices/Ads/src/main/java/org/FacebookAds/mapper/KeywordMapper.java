package org.FacebookAds.mapper;

import org.FacebookAds.model.dto.KeywordDto;
import org.FacebookAds.model.entity.Keyword;

public class KeywordMapper {
    public static KeywordDto toDto(Keyword keyword){
        return KeywordDto.builder()
                .id(keyword.getId())
                .adProfileId(keyword.getAdProfileId())
                .word(keyword.getWord())
                .frequency(keyword.getFrequency())
                .sentimentScore(keyword.getSentimentScore())
                .score(keyword.getScore())
                .build();
    }
}
