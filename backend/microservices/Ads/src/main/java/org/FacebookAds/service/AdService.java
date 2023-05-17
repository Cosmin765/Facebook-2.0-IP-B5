package org.FacebookAds.service;

import org.FacebookAds.model.entity.Ad;
import org.FacebookAds.repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepository;

    public Ad createAd(Ad ad) {
        return adRepository.save(ad);
    }

    public void deleteAd(Integer id) {
        adRepository.deleteById(id);
    }

    public Ad updateAd(Integer id, Ad newAd) {
        Ad ad = adRepository.findById(id).orElse(null);
        if (ad != null) {
            if (newAd.getAdCompany() != null) ad.setAdCompany(newAd.getAdCompany());
            if (newAd.getTitle() != null) ad.setTitle(newAd.getTitle());
            if (newAd.getImage() != null) ad.setImage(newAd.getImage());
            if (newAd.getContent() != null) ad.setContent(newAd.getContent());
            if (newAd.getAdKeywords() != null) ad.setAdKeywords(newAd.getAdKeywords());
            if (newAd.getLink() != null) ad.setLink(newAd.getLink());
            return adRepository.save(ad);
        }
        return null;
    }

    public Integer checkClicks(Integer id) {
        Integer result = adRepository.getNumberOfClicks(id);
        if (result == null)
            return 0;
        return result;
    }

    public Integer checkImpressions(Integer id) {
        Integer result = adRepository.getNumberOfImpressions(id);
        if (result == null)
            return 0;
        return result;
    }
}