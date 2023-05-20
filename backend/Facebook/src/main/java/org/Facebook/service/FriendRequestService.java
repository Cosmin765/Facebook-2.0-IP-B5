package org.Facebook.service;

import org.Facebook.model.dto.UserDto;
import org.Facebook.model.entity.FriendRequest;
import org.Facebook.model.entity.User;
import org.Facebook.repository.FriendRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendRequestService {
    @Autowired
    private FriendRequestRepository friendRequestRepository;

    public List<FriendRequest> getFriendRequestsByUser(UserDto user) {
        return friendRequestRepository.getByUserId(user.getId());
    }
    public List<FriendRequest> getFriendRequestsByUserSend(UserDto user) {
        return friendRequestRepository.getBySenderUserId(user.getId());
    }


    public FriendRequest updateR(Integer id, String status) {
        friendRequestRepository.updateRequest(id, status);
        return friendRequestRepository.findById(id).get();
    }

    public FriendRequest saveFriendRequest(Integer senderId, Integer receiverId, String status) {
        friendRequestRepository.addFriendRequest(senderId, receiverId, status);

        return friendRequestRepository.findBySenderAndReceiverIds(senderId, receiverId);
    }
}
