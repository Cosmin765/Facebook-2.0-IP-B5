package org.FacebookAds.repository;

import org.FacebookAds.model.entity.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface AdRepository extends JpaRepository<Ad, Integer> {
    @Query(value = "SELECT SUM(impressions) FROM ad_impressions where ad_id = :id", nativeQuery = true)
    Integer getNumberOfImpressions(@Param("id") Integer id);

    @Query(value = "SELECT COUNT(*) FROM ad_clicks where ad_id = :adId", nativeQuery = true)
    Integer getNumberOfClicks(@Param("adId") Integer adId);

    @Query(value = "SELECT * FROM ads", nativeQuery = true)
    List<Ad> getAllAds();

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO ads (ad_company_id, title, image, content, keywords, link) values (:adCompanyId, :title, :image, :content, :keywords, :link)", nativeQuery = true)
    void insertAd(@Param(value = "adCompanyId") Integer adCompanyId, @Param(value = "title") String title, @Param(value = "image") String image, @Param(value = "content") String content, @Param(value = "keywords") String keywords, @Param(value = "link") String link);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM ads where id = :adId", nativeQuery = true)
    void deleteAd(@Param("adId") Integer adId);
}
