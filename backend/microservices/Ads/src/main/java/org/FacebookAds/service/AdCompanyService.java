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

    public void createAdCompany(String name, String description) {
        AdCompany company = new AdCompany();
        company.setName(name);
        company.setDescription(description);
        companyRepository.save(company);
    }

    public void deleteAdCompany(Integer id) {
        companyRepository.deleteById(id);
    }

    public void updateAdCompany(Integer id, String newName, String newDescription) {
        AdCompany company = companyRepository.findById(id).orElse(null);
        if (company != null) {
            if (newName != null) company.setName(newName);
            if (newDescription != null) company.setDescription(newDescription);
            companyRepository.save(company);
        }
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