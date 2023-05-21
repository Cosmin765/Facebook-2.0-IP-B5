package org.Facebook.repository;

import org.Facebook.model.entity.Friendship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendshipRepository extends JpaRepository<Friendship, Integer> {
    @Query(value = "SELECT * FROM friendships where user_id1 = :userId or user_id2 = :userId", nativeQuery = true)
    List<Friendship> getFriends(@Param("userId") Integer userId);

    @Query(value = "SELECT f.* FROM friendships f " +
            "JOIN users u1 ON f.user_id1 = u1.id " +
            "JOIN users u2 ON f.user_id2 = u2.id " +
            "WHERE (f.user_id1 = :userId) " +
            "AND (u2.is_logged_in = true)", nativeQuery = true)
    List<Friendship> getLoggedFriends(@Param("userId") Integer userId);
}
