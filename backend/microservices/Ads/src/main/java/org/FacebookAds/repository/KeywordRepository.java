package org.FacebookAds.repository;

import org.FacebookAds.model.entity.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Integer> {
    @Query(value = "SELECT * FROM keywords where ad_profile_id = :ad_profile_id", nativeQuery = true)
    List<Keyword> findByProfileId(@Param("ad_profile_id") Integer adProfileId);

    @Query(value = "SELECT * FROM keywords where ad_profile_id = :ad_profile_id and word = :word", nativeQuery = true)
    Keyword findKeyByWordAndProfId(@Param("ad_profile_id") Integer adProfileId,
                                   @Param("word") String word);

    @Query(value = "SELECT * FROM keywords WHERE ad_profile_id = :ad_profile_id AND score > 0.4 ORDER BY score DESC", nativeQuery = true)
    List<Keyword> getTopKeywordsByAdProfileId(@Param("ad_profile_id") Integer adProfileId);


    @Modifying
    @Transactional
    @Query(value = "UPDATE keywords SET frequency = :frequency, sentiment_score = :sentimentScore, score = :score WHERE ad_profile_id = :adProfileId AND word = :word", nativeQuery = true)
    void updateKeyword(@Param("adProfileId") Integer adProfileId,
                       @Param("word") String word,
                       @Param("frequency") Integer frequency,
                       @Param("sentimentScore") Double sentimentScore,
                       @Param("score") Double score);


    @Modifying
    @Transactional
    @Query(value = "INSERT INTO keywords(ad_profile_id, word, frequency, sentiment_score, score) " +
            "VALUES (:adProfileId, :word, :frequency, :sentimentScore, :score)", nativeQuery = true)
    void addKeyword(@Param("adProfileId") Integer adProfileId,
                    @Param("word") String word,
                    @Param("frequency") Integer frequency,
                    @Param("sentimentScore") Double sentimentScore,
                    @Param("score") Double score);

}
