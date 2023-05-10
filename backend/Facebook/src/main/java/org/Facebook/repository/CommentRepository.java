package org.Facebook.repository;

import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findByPostId(int postId);
    @Query(value = "SELECT * FROM comments order by id", nativeQuery = true)
    List<Comment> findAll();

    //@Query(value = "SELECT * FROM comments user_id = :user_id", nativeQuery = true)
    List<Comment> findByUser(User user);
    List<Comment> findByPost(Post post);

    /*@Modifying
    @Query(value = "INSERT INTO comments (post_id, user_id, content, created_at, updated_at) VALUES (:postId, :userId, :content, NOW(), NOW())", nativeQuery = true)
    void postComment(@Param("postId") Integer postId, @Param("userId") Integer userId, @Param("content") String content);*/

    @Query(value = "SELECT * FROM comments where id = :user_id", nativeQuery = true)
    List<Comment> findByUserId(@Param("user_id") Integer id);

    @Query(value = "SELECT * FROM users where post = :post_id", nativeQuery = true)
    List<Comment> findByPostId(@Param("post_id") Integer post);

    /*@Query(value = "SELECT * FROM users where comment = :id", nativeQuery = true)
    List<Comment> findByCommentId(@Param("comment") Integer comment);*/

}
