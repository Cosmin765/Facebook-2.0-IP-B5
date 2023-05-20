package org.Facebook.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "post_id")
//    @JsonManagedReference("post-images")
//    private List<PostImage> images;

    @ManyToOne()
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
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id")
    private List<PostImage> postImages;
    @Column(name = "created_at")
    private Timestamp createdAt;
    @Column(name = "updated_at")
    private Timestamp updatedAt;
    @PrePersist
    protected void onCreate() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        createdAt = timestamp;
        updatedAt = timestamp;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Timestamp(System.currentTimeMillis());
    }
}
