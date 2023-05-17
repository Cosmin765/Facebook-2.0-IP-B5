package org.FacebookAds.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "keywords")
public class Keyword {
    public String word;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "ad_profile_id")
    private AdProfile adProfileId;
    private Integer frequency;
    private Double sentimentScore;
    private Double score;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    @ManyToMany(mappedBy = "adKeywords")
    private List<Ad> ads;
    @ManyToMany(mappedBy = "adProfileKeywords")
    private List<AdProfile> adProfiles;
}