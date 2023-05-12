package org.FacebookAds.repository;

import org.FacebookAds.model.entity.AdClick;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdClickRepository extends JpaRepository<AdClick, Integer> {
}
