package org.Facebook.repository;

import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {
    @Query(value = "SELECT * FROM comments where post_id = :post_id", nativeQuery = true)
    List<Comment> findByPostId(@Param("post_id") Integer post_id);
    @Query(value = "SELECT * FROM comments where user_id = :user_id", nativeQuery = true)
    List<Comment> findByUserId(@Param("user_id") Integer user_id);
    @Query(value = "SELECT * FROM comments where id = :id", nativeQuery = true)
    Comment findByCommentId(@Param("id") Integer id);

    List<Comment> findByUser(User user);
    List<Comment> findByPost(Post post);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO comments (post_id, user_id, content, created_at, updated_at) VALUES (:post_id, :user_id, :content, NOW(), NOW())", nativeQuery = true)
    void postComment(@Param("post_id") Integer postId, @Param("user_id") Integer userId, @Param("content") String content);

    @Modifying
    @Query(value = "UPDATE comments SET content = :content, updated_at = NOW() where id = :id", nativeQuery = true)
    void editComment(@Param("content") String content, @Param("id") Integer id);
}
