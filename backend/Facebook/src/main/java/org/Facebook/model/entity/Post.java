package org.Facebook.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.Facebook.repository.PostRepository;
import org.Facebook.service.PostService;
import org.springframework.web.multipart.MultipartFile;

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

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Like> likes;

//    @Lob
//    @Column(name = "image")
//    private byte[] image;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    @JsonManagedReference("post-images")
    private List<PostImage> images;



    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "ad_location")
    private String adLocation;

    @Column(name = "ad_status")
    private String adStatus;
//    private PostService postService;

//    public void setNumberOfLikes() {
//        likes = postService.getNumberOfLikes(this.id);
//    }

    public boolean isReported() {
        return false;
    }

}
