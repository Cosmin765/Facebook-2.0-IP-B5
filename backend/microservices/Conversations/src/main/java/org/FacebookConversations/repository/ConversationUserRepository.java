package org.FacebookConversations.repository;

import org.FacebookConversations.model.entity.ConversationUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ConversationUserRepository extends JpaRepository<ConversationUser, Integer> {


    @Query(value = "SELECT * FROM conversation_users where conversation_id= :conversation_id", nativeQuery = true)
    ConversationUser findByConversationId(@Param("conversation_id") Integer conversationId);

    @Query(value = "SELECT conversation_id FROM conversation_users where user_id= :user_id", nativeQuery = true)
    List<Integer> findConversationIdByUserId(@Param("user_id") Integer userId);

    @Query(value = "SELECT user_id FROM conversation_users where conversation_id= :conversation_id", nativeQuery = true)
    List<Integer> findUserIdByConversationId(@Param("conversation_id") Integer conversationId);
}
