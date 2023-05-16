package org.Facebook.service;

import org.Facebook.model.entity.Friendship;
import org.Facebook.repository.FriendshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FriendshipService {
    @Autowired
    private FriendshipRepository friendshipRepository;

    public void addFriendship(Friendship friendship) {
        friendshipRepository.save(friendship);
    }
}
