package org.Facebook.service;

import org.Facebook.repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdCompanyService {
  @Autowired
  private AdRepository adRepository;

  public void createAd(String title) {
    adRepository.insertAd(title);
  }

  public void deleteAd(Integer adId) {
    adRepository.deleteAd(adId);
  }

  public Integer checkStats(Integer adId) {
    return adRepository.getNumberOfClicks(adId);
  }

}