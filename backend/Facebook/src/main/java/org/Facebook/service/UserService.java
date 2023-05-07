package org.Facebook.service;

import org.Facebook.config.AppSecurityConfig;
import org.Facebook.mapper.UserMapper;
import org.Facebook.model.dto.UserDto;
import org.Facebook.model.entity.Friendship;
import org.Facebook.model.entity.User;
import org.Facebook.repository.FriendshipRepository;
import org.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.util.Pair;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FriendshipRepository friendshipRepository;
    public void registerUser(User user) {
        String hashedPassword = AppSecurityConfig.getPasswordEncoder().encode(user.getPassword());
        user.setPassword(hashedPassword);
        userRepository.save(user);
    }
    public List<UserDto> getUsers() {
        return userRepository.findAll().stream().map(UserMapper::toDto).toList();
    }

    public List<User> getFriends(int userId) {
        List<Friendship> friendships = friendshipRepository.getFriends(userId);

        return friendships.stream()
                .map(friendship -> friendship.getUser1().getId() == userId ? friendship.getUser2() : friendship.getUser1())
                .toList();
    }

    public List<User> searchUsers(String name) {
        int resultsCount = 20;
        List<String> tokens = Arrays.stream(name.split("\\s")).map(s -> s.toLowerCase(Locale.ROOT)).toList();

        PriorityQueue<Pair<User, Integer>> queue = new PriorityQueue<>(Comparator.comparing(Pair::getSecond));

        int pageSize = 20;
        int pageIndex = 0;
        Page<User> page;
        do {
            page = userRepository.findAll(PageRequest.of(pageIndex++, pageSize));

            for(User user : page.getContent()) {
                List<String> otherTokens = Arrays.stream(user.getName().split("\\s"))
                        .map(s -> s.toLowerCase(Locale.ROOT)).toList();

                String lowerName = user.getName().toLowerCase(Locale.ROOT);

                int score = 0;
                for(String token : tokens) {
                    if(otherTokens.contains(token)) {
                        score += 3;
                        continue;
                    }

                    if(lowerName.contains(token)) {
                        score += 1;
                    }
                }

                queue.add(Pair.of(user, score));
                while(queue.size() > resultsCount) {
                    queue.remove();
                }
            }
        } while(pageIndex < page.getTotalPages());

        List<User> matches = new ArrayList<>();

        while(queue.size() > 0) {
            matches.add(queue.remove().getFirst());
        }
        Collections.reverse(matches);

        return matches;
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
