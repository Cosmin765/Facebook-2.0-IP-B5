package org.Facebook.model.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "posts")
public class Post {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String content;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id")
    @JsonManagedReference("post-images")
    private List<PostImage> images;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
    private String location;
    private String status;
    @OneToMany
    @JoinColumn(name = "post_id")
    private List<Like> likes;
    @OneToMany
    @JoinColumn(name = "post_id")
    private List<Comment> comments;
    @OneToMany
    @JoinColumn(name = "post_id")
    private List<PostImage> postImages;
    private Timestamp createdAt;
    private Timestamp updatedAt;
}
