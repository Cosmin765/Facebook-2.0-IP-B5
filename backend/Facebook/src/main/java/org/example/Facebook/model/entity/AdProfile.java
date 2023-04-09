package org.example.Facebook.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ad_profiles")
public class AdProfile {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  private Integer Id;
  private Integer userId;
  private String keywords;
}
