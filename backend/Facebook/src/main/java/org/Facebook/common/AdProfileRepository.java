package org.Facebook.common;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface AdProfileRepository extends JpaRepository<AdProfile, Integer> {
    @Query(value = "SELECT * FROM ad_profiles where user_id = :user_id", nativeQuery = true)
    AdProfile findByUserId(@Param("user_id") Integer userId);


   @Query(value = "SELECT id, user_id, keyword_id FROM ad_profiles WHERE user_id = :user_id", nativeQuery = true)
    List<AdProfile> getAllProfilesById(@Param("user_id") Integer userId);

   // new id
    @Query(value = "SELECT id FROM ad_profiles WHERE user_id = :user_id", nativeQuery = true)
    Integer getAdProfileIdByUserId(@Param("user_id") Integer userId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO ad_profiles (user_id) VALUES ( :user_id)", nativeQuery = true)
    void insertAdProfile( @Param("user_id") Integer userId);


}
