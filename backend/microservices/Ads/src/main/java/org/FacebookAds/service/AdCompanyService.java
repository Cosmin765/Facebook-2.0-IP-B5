package org.FacebookAds.service;

import org.FacebookAds.model.entity.AdCompany;
import org.FacebookAds.repository.AdCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdCompanyService {

    private final AdCompanyRepository companyRepository;

    @Autowired
    public AdCompanyService(AdCompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public AdCompany createAdCompany(AdCompany adCompany) {
        return companyRepository.save(adCompany);
    }

    public void deleteAdCompany(Integer id) {
        companyRepository.deleteById(id);
    }

    public AdCompany updateAdCompany(Integer id, AdCompany newAdCompany) {
        AdCompany company = companyRepository.findById(id).orElse(null);
        if (company != null) {
            if (newAdCompany.getEmail() != null) company.setName(newAdCompany.getEmail());
            if (newAdCompany.getPassword() != null) company.setName(newAdCompany.getPassword());
            if (newAdCompany.getName() != null) company.setName(newAdCompany.getName());
            if (newAdCompany.getDescription() != null) company.setName(newAdCompany.getDescription());
            if (newAdCompany.getProfilePicture() != null) company.setName(newAdCompany.getProfilePicture());
            if (newAdCompany.getCoverPicture() != null) company.setName(newAdCompany.getCoverPicture());
            return companyRepository.save(company);
        }
        return null;
    }

    public int checkImpressions(Integer id) {
        Integer result = companyRepository.getNumberOfImpressions(id);
        if (result == null) {
            System.out.println("Null found!");
            return 0;
        }
        return result;
    }

    public int checkClicks(Integer id) {
        Integer result = companyRepository.getNumberOfImpressions(id);
        if (result == null) {
            System.out.println("Null found!");
            return 0;
        }
        return result;
    }
}