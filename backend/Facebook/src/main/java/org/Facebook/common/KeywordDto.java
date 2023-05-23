package org.Facebook.common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KeywordDto /*implements Comparable<KeywordDto>*/ {
    private Integer id;
    private String word;
    private Integer frequency;
    private Double sentimentScore;
    private Double score;
}
