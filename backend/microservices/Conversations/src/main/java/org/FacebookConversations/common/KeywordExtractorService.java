package org.FacebookConversations.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class KeywordExtractorService {
    @Autowired
    public KeywordExtractor keywordExtractor;

    @Async("taskExecutor")
    public void processUserInput(String userInput, Integer userId) {
        keywordExtractor.analyzeMessage(userInput, userId);
    }
}
