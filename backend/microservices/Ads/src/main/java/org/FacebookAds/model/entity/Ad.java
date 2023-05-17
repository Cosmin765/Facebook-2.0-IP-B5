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
@Table(name = "ads")
public class Ad {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "ad_company_id", nullable = false)
    private AdCompany adCompany;
    @Column(nullable = false)
    private String title;
    private String image;
    @Column(nullable = false)
    private String content;
    @ManyToMany
    @JoinTable(name = "ad_keywords", joinColumns = @JoinColumn(name = "ad_id"), inverseJoinColumns = @JoinColumn(name = "keyword_id"))
    private List<Keyword> adKeywords;
    private String link;
    private Date createdAt;
    private Date updatedAt;
}
