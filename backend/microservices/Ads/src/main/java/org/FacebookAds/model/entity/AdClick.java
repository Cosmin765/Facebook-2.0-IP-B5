//nu avem nevoie?
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
@Table(name = "ad_clicks")
public class AdClick {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    @OneToOne
    @JoinColumn(name = "ad_id")
    private Ad ad;
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    private Timestamp clickedAt;
    private Integer clicksCount;
}
