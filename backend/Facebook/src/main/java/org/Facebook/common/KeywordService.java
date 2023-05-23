package org.Facebook.common;

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

    public List<Keyword> getKeyByProfile(Integer value) {
        return keywordRepository.findByProfileId(value);
    }
}
