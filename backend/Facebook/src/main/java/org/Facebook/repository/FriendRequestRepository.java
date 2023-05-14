package org.Facebook.repository;

import org.Facebook.model.entity.FriendRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendRequestRepository extends JpaRepository<FriendRequest, Integer> {
    @Query(value = "select * from friend_requests where sender_id = :user_id or receiver_id = :user_id", nativeQuery = true)
    List<FriendRequest> getByUserId(@Param("user_id") Integer userId);
}
