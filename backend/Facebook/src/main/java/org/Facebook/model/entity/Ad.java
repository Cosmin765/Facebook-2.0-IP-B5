package org.Facebook.model.entity;

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
  public String id;
  public String title;
  public String content;
  public Integer numberOfClicks;
}
