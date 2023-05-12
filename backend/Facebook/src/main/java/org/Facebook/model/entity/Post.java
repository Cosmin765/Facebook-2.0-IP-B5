package org.Facebook.model.entity;

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
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
    private String content;
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
