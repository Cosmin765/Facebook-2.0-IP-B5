package org.FacebookAds.service;

import org.FacebookAds.mapper.AdProfileMapper;
import org.FacebookAds.mapper.KeywordMapper;
import org.FacebookAds.model.dto.KeywordDto;
import org.FacebookAds.model.entity.Keyword;
import org.FacebookAds.repository.KeywordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KeywordService {
    @Autowired
    private KeywordRepository keywordRepository;

    public List<KeywordDto> getAllKeywords() {
        return keywordRepository.findAll().stream().map(KeywordMapper::toDto).toList();
    }

    public List<Keyword> getKeyByProfile(Integer value){
        return keywordRepository.findByProfileId(value);
    }
}
