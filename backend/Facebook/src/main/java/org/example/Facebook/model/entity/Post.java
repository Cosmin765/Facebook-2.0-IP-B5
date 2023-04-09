package org.example.Facebook.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "posts")
public class Post {
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  private String Id;
  private String title;
  private String content;
}
