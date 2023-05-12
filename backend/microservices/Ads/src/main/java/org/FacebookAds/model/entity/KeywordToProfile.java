package org.FacebookAds.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "keyword_to_profile")
public class KeywordToProfile {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    @OneToOne
    @JoinColumn(name = "keyword_id")
    private Keyword keyword;
    @OneToOne
    @JoinColumn(name = "ad_profile_id")
    private AdProfile adProfile;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
