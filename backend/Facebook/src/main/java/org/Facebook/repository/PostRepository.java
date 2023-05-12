package org.Facebook.repository;

import org.Facebook.model.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query(value = "SELECT * FROM posts ORDER BY created_at DESC", nativeQuery = true)
    List<Post> findAllPostsDesc();

    @Query(value = "SELECT * FROM posts where id= :id", nativeQuery = true)
    Post findByPostId(@Param("id") Integer id);

    @Query(value = "SELECT * FROM posts where user_id= :id", nativeQuery = true)
    List<Post> findByUserId(@Param("id") Integer id);

    @Query(value = "SELECT * from posts where user_id in :users and id > :cursor limit :count", nativeQuery = true)
    List<Post> findByUsersLimit(@Param("users") List<Integer> users, @Param("count") Integer count, @Param("cursor") Integer cursor);

    @Query(value = "SELECT posts.id,posts.user_id,content, image FROM posts join users on posts.user_id=users.id where email = :email", nativeQuery = true)
    List<Post> findByEmail(@Param("email") String email);

    @Query(value = "SELECT posts.id,posts.user_id,content, image FROM posts join users on posts.user_id=users.id where name= :name", nativeQuery = true)
    List<Post> findByName(@Param("name") String name);

    @Query(value = "SELECT content FROM posts WHERE user_id = :user_id", nativeQuery = true)
    List<String> findContentByUserId(@Param("user_id") Integer user_id);

    @Query(value = "SELECT content FROM posts WHERE user_id = :user_id ORDER BY created_at ASC", nativeQuery = true)
    List<String> findContentByUserIdByTimeAsc(@Param("user_id") Integer user_id);

    @Query(value = "SELECT content FROM posts WHERE user_id = :user_id ORDER BY created_at DESC", nativeQuery = true)
    List<String> findContentByUserIdByTimeDesc(@Param("user_id") Integer user_id);

    @Query(value = "SELECT image FROM posts WHERE user_id = :user_id", nativeQuery = true)
    List<byte[]> findImagesByUserId(@Param("user_id") Integer user_id);

    @Query(value = "SELECT image FROM posts WHERE id = :id", nativeQuery = true)
    byte[] findImageById(@Param("id") Integer id);

    @Query(value = "SELECT count(*) FROM posts join likes on posts.id=likes.post_id", nativeQuery = true)
    Integer getNumberOfLikes(@Param("id") Integer id);

}
