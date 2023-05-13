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

    @Query(value = "SELECT * FROM messages where user_id = :user_id", nativeQuery = true)
    List<Message> findByUserId(@Param("user_id") Integer userId);

    @Query(value = "SELECT * FROM messages where user_id = :user_id and conversation_id = :conversation_id", nativeQuery = true)
    List<Message> findByUserIdAndConversationId(@Param("user_id") Integer userId, @Param("conversation_id") Integer conversationId);

    @Query(value = "SELECT * FROM (SELECT *, @row_num \\:= @row_num + 1 as row_num  FROM messages, (SELECT @row_num\\:= -1) as r WHERE conversation_id = :conversation_id ORDER BY created_at DESC) AS subquery WHERE row_num >= :cursor ORDER BY row_num ASC LIMIT :count -- escape='\\' ", nativeQuery = true)
    List<Message> findLastMessagesForConversation(@Param("conversation_id") Integer conversationId, @Param("count") Integer count, @Param("cursor") Integer cursor);

    @Modifying
    @Transactional
    Message save(Message message);


}
