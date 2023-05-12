package org.Facebook.repository;

import org.Facebook.model.entity.Comment;
import org.Facebook.model.entity.Like;
import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends JpaRepository<Like, Integer> {

    @Query(value = "SELECT * FROM likes ORDER BY created_at DESC", nativeQuery = true)
    List<Like> findAllLikesDesc();

    @Query(value = "SELECT * FROM  likes where id= :id", nativeQuery = true)
    Like findByLikeId(@Param("id") Integer id);

    @Query(value = "SELECT * FROM likes where user_id= :id", nativeQuery = true)
    List<Like> findByUserId(@Param("id") Integer id);

    @Query(value = "SELECT * FROM likes where post_id = :post_id", nativeQuery = true)
    List<Like> findByPostId(@Param("post_id") Integer post_id);

    @Query(value = "SELECT count(*) FROM posts join likes on posts.id=likes.post_id", nativeQuery = true)
    Integer getNumberOfLikes(@Param("id") Integer id);
}