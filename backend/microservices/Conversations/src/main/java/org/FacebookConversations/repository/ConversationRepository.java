package org.FacebookConversations.repository;

import org.FacebookConversations.model.entity.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation,Integer> {
    @Query(value = "SELECT * FROM conversations where id = :id", nativeQuery = true)
    List<Conversation> findConvById(@Param("id") Integer id);
}
