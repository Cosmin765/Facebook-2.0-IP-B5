package org.Facebook.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "keywords")
public class Keyword {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    public String word;
    private Integer frequency;
    private Double sentimentScore;
    private Double score;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
