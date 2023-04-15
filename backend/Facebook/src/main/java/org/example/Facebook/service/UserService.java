package org.example.Facebook.service;

import org.example.Facebook.adapters.AppSecurityConfig;
import org.example.Facebook.mapper.UserMapper;
import org.example.Facebook.model.dto.UserDto;
import org.example.Facebook.model.entity.User;
import org.example.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    public void registerUser(User user) {
        String hashedPassword = AppSecurityConfig.getPasswordEncoder().encode(user.getPassword());
        user.setPassword(hashedPassword);
        userRepository.save(user);
    }
    public List<UserDto> getUsers() {
        return userRepository.findAll().stream().map(UserMapper::toDto).toList();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if(user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }
}