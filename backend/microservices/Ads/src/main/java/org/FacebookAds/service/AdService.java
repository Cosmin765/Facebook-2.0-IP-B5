package org.FacebookAds.service;

import org.FacebookAds.model.entity.Ad;
import org.FacebookAds.repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdService {

    @Autowired
    private AdRepository adRepository;

    public void createAd(Integer adCompanyId, String name, String image, String description, String keywords) {
        Ad ad = new Ad();
        ad.setAdCompanyId(adCompanyId);
        ad.setName(name);
        ad.setImage(image);
        ad.setDescription(description);
        ad.setKeywords(keywords);
        adRepository.save(ad);
    }

    public void deleteAd(Integer id) {
        adRepository.deleteById(id);
    }

    public void updateAd(Integer id, Integer newAdCompanyId, String newName, String newImage, String newDescription, String newKeywords) {
        Ad ad = adRepository.findById(id).orElse(null);
        if (ad != null) {
            if (newAdCompanyId != null) ad.setAdCompanyId(newAdCompanyId);
            if (newName != null) ad.setName(newName);
            if (newImage != null) ad.setImage(newImage);
            if (newDescription != null) ad.setDescription(newDescription);
            if (newKeywords != null) ad.setKeywords(newKeywords);
            adRepository.save(ad);
        }
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