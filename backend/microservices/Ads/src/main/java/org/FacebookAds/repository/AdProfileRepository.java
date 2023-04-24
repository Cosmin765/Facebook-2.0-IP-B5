package org.FacebookAds.repository;

import org.FacebookAds.model.entity.AdProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdProfileRepository extends JpaRepository<AdProfile, Integer> {
    @Query(value = "SELECT * FROM ad_profiles where user_id = :user_id", nativeQuery = true)
    AdProfile findByUserId(@Param("user_id") Integer userId);

}
