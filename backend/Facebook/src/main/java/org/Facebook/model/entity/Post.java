package org.Facebook.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.Facebook.repository.PostRepository;
import org.Facebook.service.PostService;

import javax.persistence.*;
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

    // TODO: Like ar trebui sa fie un model separat, iar un post dto sa contina o lista de likes
//    private Integer likes;

    @Lob
    @Column(name = "image")
    private byte[] image;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
//    private PostService postService;

//    public void setNumberOfLikes() {
//        likes = postService.getNumberOfLikes(this.id);
//    }

    public boolean isReported() {
        return false;
    }

}
