package org.FacebookConversations.repository;


import org.FacebookConversations.model.entity.Message;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
    @Query(value = "SELECT * FROM messages where conversation_id = :conversation_id", nativeQuery = true)
    List<Message> findByConversationId(@Param("conversation_id") Integer conversationId);

    @Query(value = "SELECT * FROM messages where from_user_id = :user_id", nativeQuery = true)
    List<Message> findByUserId(@Param("user_id") Integer userId);

    @Query(value = "SELECT * FROM messages where from_user_id = :user_id and conversation_id = :conversation_id", nativeQuery = true)
    List<Message> findByUserIdAndConversationId(@Param("user_id") Integer userId, @Param("conversation_id") Integer conversationId);

    @Query(value = "SELECT * FROM messages where conversation_id = :conversation_id order by created_at desc limit :count", nativeQuery = true)
    List<Message> findLastMessagesForConversation(@Param("conversation_id") Integer conversationId, @Param("count") Integer count);

    @Query(value = "SELECT * FROM messages where to_user_id = :to_user_id and from_user_id = :from_user_id",nativeQuery = true)
    List<Message> findFromTo(@Param("to_user_id") Integer toUser, @Param("from_user_id") Integer fromUser);
    @Modifying
    @Transactional
    Message save(Message message);


}