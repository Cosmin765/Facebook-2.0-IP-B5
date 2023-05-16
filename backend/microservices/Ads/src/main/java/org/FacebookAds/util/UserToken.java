package org.FacebookAds.util;

public class UserToken {
    private String lemma;
    private String pos;
    private double score;
    private int sentenceIndex;

    public UserToken(String lemma, String pos, double score, int sentenceIndex) {
        this.lemma = lemma;
        this.pos = pos;
        this.score = score;
        this.sentenceIndex = sentenceIndex;

    }

    public String getLemma() {
        return lemma;
    }

    public void setLemma(String lemma) {
        this.lemma = lemma;
    }

    public int getSentenceIndex() {
        return sentenceIndex;
    }

    public void setSentenceIndex(int sentenceIndex) {
        this.sentenceIndex = sentenceIndex;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }
}