package org.Facebook.common;


public class KeywordMapper {
    public static KeywordDto toDto(Keyword keyword) {
        return KeywordDto.builder()
                .id(keyword.getId())
                .word(keyword.getWord())
                .frequency(keyword.getFrequency())
                .sentimentScore(keyword.getSentimentScore())
                .score(keyword.getScore())
                .build();
    }
}
