package org.Facebook.repository;

import org.Facebook.model.entity.PostImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostImageRepository extends JpaRepository<PostImage, Integer> {

    @Query(value = "SELECT * FROM post_images", nativeQuery = true)
    List<PostImage> findAllImages();

    @Query(value = "SELECT * FROM post_images where post_id=:id", nativeQuery = true)
    List<PostImage> findAllImagesByPost(@Param("id") Integer id);

    @Query(value = "SELECT * FROM post_images where id=:id", nativeQuery = true)
    PostImage findImageById(@Param("id") Integer id);


}
