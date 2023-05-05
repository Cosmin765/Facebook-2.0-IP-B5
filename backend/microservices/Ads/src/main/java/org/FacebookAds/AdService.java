package org.FacebookAds.service;/*
package org.FacebookAds.service;

import org.FacebookAds.model.entity.Ad;
import org.FacebookAds.repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepository;

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
*/
