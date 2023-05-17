package org.FacebookAds.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ad_profiles")
public class AdProfile {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToMany
    @JoinTable(name = "ad_profile_keywords", joinColumns = @JoinColumn(name = "ad_profile_id"), inverseJoinColumns = @JoinColumn(name = "keyword_id"))
    private List<Keyword> adProfileKeywords;
    private Date createdAt;
    private Date updatedAt;
}
