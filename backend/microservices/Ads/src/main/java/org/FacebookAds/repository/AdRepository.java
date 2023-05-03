package org.FacebookAds.repository;

import org.FacebookAds.model.entity.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdRepository extends JpaRepository<Ad, Integer> {
    @Query(value = "SELECT SUM(clicks) FROM ad_clicks where ad_id = :id", nativeQuery = true)
    Integer getNumberOfClicks(@Param("id") Integer id);

    @Query(value = "SELECT SUM(impressions) FROM ad_impressions where ad_id = :id", nativeQuery = true)
    Integer getNumberOfImpressions(@Param("id") Integer id);
}
