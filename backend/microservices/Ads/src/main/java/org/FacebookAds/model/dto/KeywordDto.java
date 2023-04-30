package org.FacebookAds.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KeywordDto /*implements Comparable<KeywordDto>*/
{
    private Integer id;
    private Integer adProfileId;
    private String word;
    private Integer frequency;
    private Double sentimentScore;
    private Double score;

}
