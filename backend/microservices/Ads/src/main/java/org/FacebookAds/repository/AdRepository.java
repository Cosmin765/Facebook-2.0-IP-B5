package org.FacebookAds.repository;

import org.FacebookAds.model.entity.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdRepository extends JpaRepository<Ad, Integer> {
    // Add ad impressions too
    @Query(value = "SELECT COUNT(*) FROM ad_clicks where ad_id = :id", nativeQuery = true)
    Integer getStats(@Param("id") Integer id);
}
