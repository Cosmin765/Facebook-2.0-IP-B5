package org.Facebook.service;

import org.Facebook.model.entity.Ad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdCompanyService {
  @Autowired
  private AdRepository adRepository; // presupunem ca AdRepo e un Spring Data Repository, legatura cu docker database

  public Ad createAd(String title, String content) {
    Ad ad = new Ad();
    ad.setTitle(title);
    ad.setContent(content);
    ad.setNumberOfClicks(0);
    return adRepository.save(ad);
  }

  public void deleteAd(Ad ad) {
    adRepository.delete(ad);
  }

  public int checkStats(Ad ad) {
    return ad.getNumberOfClicks();
  }

}