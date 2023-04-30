package org.FacebookConversations.repository;


import org.FacebookConversations.model.entity.Message;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message,Integer> {
    @Query(value = "SELECT * FROM messages where conversation_id = :conversation_id", nativeQuery = true)
    List<Message> findByConversationId(@Param("conversation_id") Integer conversationId);


}
