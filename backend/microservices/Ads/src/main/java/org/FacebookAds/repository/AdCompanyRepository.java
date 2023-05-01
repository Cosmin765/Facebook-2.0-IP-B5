package org.FacebookAds.repository;

import org.FacebookAds.model.entity.AdCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AdCompanyRepository extends JpaRepository<AdCompany, Integer> {
    @Query(value = "SELECT SUM(clicks) FROM ad_clicks where ad_id IN (SELECT id FROM ads WHERE ad_company_id = (SELECT id FROM ad_companies WHERE id = :id))", nativeQuery = true)
    Integer getNumberOfClicks(@Param("id") Integer id);
}
