package org.FacebookConversations.common;

import edu.stanford.nlp.ling.CoreAnnotations;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.Annotation;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import edu.stanford.nlp.sentiment.SentimentCoreAnnotations;
import edu.stanford.nlp.util.CoreMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Stream;

@Component
public class KeywordExtractor {
    private final AdProfileService adProfileService;
    private Set<String> stopWords;
    @Autowired
    private AdProfileRepository adProfileRepository;

    @Autowired
    public KeywordExtractor(AdProfileService adProfileService) {
        Set<String> stopWords = new HashSet<>();
        String filepath = "C:\\Projects\\Facebook-2.0-IP-B5\\backend\\microservices\\Ads\\src\\main\\resources\\stopwords\\eng-stopwords.txt";
        //String filepath = "src\\main\\resources\\stopwords\\eng-stopwords.txt";
//        String filepath = "C:\\Users\\dan\\Facebook-2.0-IP-B5\\backend\\microservices\\Ads\\src\\main\\resources\\stopwords\\eng-stopwords.txt";
        try (Stream<String> stream = Files.lines(Paths.get(filepath))) {
            stream.forEach(stopWords::add);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        this.adProfileService = adProfileService;
        setStopWords(stopWords);
    }

    public Set<String> getStopWords() {
        return stopWords;
    }

    public void setStopWords(Set<String> stopWords) {
        this.stopWords = stopWords;
    }

    public void analyzeMessage(String userInput, Integer userId) {

        StanfordCoreNLP pipeline = Pipeline.getPipeline();
        Annotation document = new Annotation(userInput);
        pipeline.annotate(document);

        int sentenceCount = 0;
        double overallSentiment = 0;
        List<Double> sentimentScores = new ArrayList<>();
        List<UserToken> userUserTokens = new ArrayList<>();
        for (CoreMap sentence : document.get(CoreAnnotations.SentencesAnnotation.class)) {
            String sentiment = sentence.get(SentimentCoreAnnotations.SentimentClass.class);
            double sentimentScore = 0;
            switch (sentiment) {
                case "Very negative" -> sentimentScore += -2.0;
                case "Negative" -> sentimentScore += -1.0;
                case "Neutral" -> sentimentScore += 0.0;
                case "Positive" -> sentimentScore += 1.0;
                case "Very positive" -> sentimentScore += 2.0;
            }
            sentenceCount++;
            sentimentScores.add(sentimentScore);

            for (CoreLabel token : sentence.get(CoreAnnotations.TokensAnnotation.class)) {
                String word = token.get(CoreAnnotations.TextAnnotation.class);
                String lemma = token.get(CoreAnnotations.LemmaAnnotation.class);
                String pos = token.get(CoreAnnotations.PartOfSpeechAnnotation.class);
                userUserTokens.add(new UserToken(lemma.toLowerCase(), pos, sentimentScore, sentenceCount));
            }
        }

        overallSentiment = calculateOverallSentiment(sentimentScores, sentenceCount);

        List<UserToken> finalUserUserTokenList = new ArrayList<>();
        for (UserToken userToken : userUserTokens) {
            if (!stopWords.contains(userToken.getLemma())) {
                finalUserUserTokenList.add(userToken);
            }
        }

        finalUserUserTokenList = chooseImportantKeyWords(finalUserUserTokenList);

        //AdProfile adProfile = adProfileRepository.findByUserId(userId);

        adProfileService.updateAdProfile(finalUserUserTokenList, userId);
    }

    private double calculateOverallSentiment(List<Double> sentimentScores, int sentenceCount) {

        double sum = 0.0;
        for (Double score : sentimentScores) {
            sum = sum + score;
        }

        return sum / sentenceCount;
    }

    private List<UserToken> chooseImportantKeyWords(List<UserToken> userUserTokens) {

        List<UserToken> newImportantUserTokenList = new ArrayList<>();
        for (UserToken userToken : userUserTokens) {
            if (userToken.getScore() >= 0) {
                if (Objects.equals(userToken.getPos(), "NN")
                        || Objects.equals(userToken.getPos(), "NNS")
                        || Objects.equals(userToken.getPos(), "NNP")
                        || Objects.equals(userToken.getPos(), "NNPS")
                        || Objects.equals(userToken.getPos(), "JJ")) {
                    newImportantUserTokenList.add(userToken);
                }
            }
        }
        return newImportantUserTokenList;
    }
}
