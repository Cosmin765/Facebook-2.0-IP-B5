package org.example.Facebook.service;

import org.example.Facebook.model.entity.Post;
import org.example.Facebook.model.entity.User;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
  public Integer accessLevel;
  public boolean banUser(User user) {
  return false;
  }
  public boolean unbanUser(User user) {
  return false;
  }
  public void deleteAnyPost(Post post) {}
}