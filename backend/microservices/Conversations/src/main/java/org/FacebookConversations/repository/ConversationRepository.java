package org.FacebookConversations.repository;

import org.FacebookConversations.model.entity.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation, Integer> {
    @Query(value = "SELECT * FROM conversations where id = :id", nativeQuery = true)
    Conversation findConvById(@Param("id") Integer id);

    @Query(value = "SELECT c.id, c.created_at, c.updated_at FROM conversations c join conversation_users cu on c.id = cu.conversation_id where cu.user_id = :user_id", nativeQuery = true)
    List<Conversation> findByUserId(@Param("user_id") Integer userId);

    @Query(value = "SELECT c.id, c.created_at, c.updated_at FROM conversations c join conversation_users cu1 on c.id = cu1.conversation_id " +
            "join conversation_users cu2 on c.id = cu2.conversation_id where cu1.user_id = :my_id and cu2.user_id = :other_id", nativeQuery = true)
    Conversation findPair(@Param("my_id") Integer myId, @Param("other_id") Integer otherId);
}
