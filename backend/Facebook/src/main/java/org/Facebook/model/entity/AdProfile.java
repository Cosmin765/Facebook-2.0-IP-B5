package org.Facebook.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ad_profiles")
public class AdProfile {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  private Integer id;
  private Integer userId;
  private String keywords;
}
