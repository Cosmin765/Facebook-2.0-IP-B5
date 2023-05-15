package org.Facebook.repository;

import org.Facebook.model.entity.FriendRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface FriendRequestRepository extends JpaRepository<FriendRequest, Integer> {
    @Query(value = "select * from friend_requests where receiver_id = :user_id", nativeQuery = true)
    List<FriendRequest> getByUserId(@Param("user_id") Integer userId);

    @Transactional
    @Modifying
    @Query(value = "update friend_requests set status= :status where id=:id",nativeQuery = true)
    void updateRequest(@Param("id") Integer id, @Param("status") String status);

}
