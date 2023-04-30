package org.FacebookAds.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "keywords")
public class Keyword {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private Integer adProfileId;
    private String word;
    private Integer frequency;
    private Double sentimentScore;
    private Double score;
}
