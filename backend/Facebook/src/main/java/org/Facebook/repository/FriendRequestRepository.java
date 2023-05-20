package org.Facebook.repository;

import org.Facebook.model.entity.FriendRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FriendRequestRepository extends JpaRepository<FriendRequest, Integer> {
    @Query(value = "select * from friend_requests where receiver_id = :user_id", nativeQuery = true)
    List<FriendRequest> getByUserId(@Param("user_id") Integer userId);


    @Query(value = "select * from friend_requests where sender_id = :user_id", nativeQuery = true)
    List<FriendRequest> getBySenderUserId(@Param("user_id") Integer userId);



    @Transactional
    @Modifying
    @Query(value = "update friend_requests set status= :status where id=:id", nativeQuery = true)
    void updateRequest(@Param("id") Integer id, @Param("status") String status);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO friend_requests (sender_id, receiver_id, status) " +
            "VALUES (:senderId, :receiverId, :status)", nativeQuery = true)
    void addFriendRequest(@Param("senderId") Integer senderId,
                          @Param("receiverId") Integer receiverId,
                          @Param("status") String status);

    @Query(value = "SELECT * FROM friend_requests WHERE " +
            "sender_id = :senderId AND receiver_id = :receiverId", nativeQuery = true)
    FriendRequest findBySenderAndReceiverIds(@Param("senderId") Integer senderId,
                                             @Param("receiverId") Integer receiverId);
}
