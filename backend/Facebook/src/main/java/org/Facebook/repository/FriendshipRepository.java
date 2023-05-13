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
}
