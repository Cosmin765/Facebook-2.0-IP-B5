package org.Facebook.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.Facebook.repository.PostRepository;
import org.Facebook.service.PostService;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "posts")
public class Post {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String content;

    private Integer likes;

    @Lob
    @Column(name = "image")
    private byte[] image;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private PostService postService;

    public void setNumberOfLikes() {
        likes = postService.getNumberOfLikes(this.id);
    }

    public boolean isReported() {
        return false;
    }

}
