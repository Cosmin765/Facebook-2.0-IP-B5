package org.Facebook.repository;

import org.Facebook.model.entity.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface AdRepository extends JpaRepository<Ad, Integer> {
    @Query(value = "SELECT COUNT(*) FROM ad_clicks where ad_id = :adId", nativeQuery = true)
    Integer getNumberOfClicks(@Param("adId") Integer adId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO ads (user_id, title, image, content, keywords, link) values (14, :title, NULL, 'boring', 'boring1,boring2,boring3', 'https://boring.com')", nativeQuery = true)
    void insertAd(@Param("title") String title);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM ads where id = :adId", nativeQuery = true)
    void deleteAd(@Param("adId") Integer adId);
}
