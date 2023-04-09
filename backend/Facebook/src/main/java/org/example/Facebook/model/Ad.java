package org.example.Facebook.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ads")
public class Ad {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  public String Id;
  public String title;
  public String content;
  public Integer numberOfClicks;
}
