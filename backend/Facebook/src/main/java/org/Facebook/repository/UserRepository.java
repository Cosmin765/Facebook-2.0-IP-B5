package org.Facebook.repository;

import org.Facebook.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "SELECT * FROM users where email = :email", nativeQuery = true)
    User findByEmail(@Param("email") String email);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users SET is_logged_in = :loggedIn WHERE id = :userId", nativeQuery = true)
    void updateUserLoggedInStatus(@Param("userId") Integer userId, @Param("loggedIn") boolean loggedIn);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users SET first_name = :firstName, last_name = :lastName WHERE id = :userId", nativeQuery = true)
    void updateUserName(@Param("userId") Integer id, @Param("firstName") String firstName, @Param("lastName") String lastName);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users SET bio = :bio WHERE id = :userId", nativeQuery = true)
    void updateUserBio(@Param("userId") Integer id, @Param("bio") String bio);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users SET profile_picture = :profile_picture WHERE id = :userId", nativeQuery = true)
    void updateProfilePicture(@Param("userId") Integer id, @Param("profile_picture") String profile_picture);
}
