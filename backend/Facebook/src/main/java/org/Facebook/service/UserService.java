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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

import static java.lang.Math.min;

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

            for (User user : page.getContent()) {
                String userName = user.getFirstName() + " " + user.getLastName();
                List<String> otherTokens = Arrays.stream(userName.split("\\s"))
                        .map(s -> s.toLowerCase(Locale.ROOT)).toList();

                String lowerName = userName.toLowerCase(Locale.ROOT);

                int score = 0;
                for (String token : tokens) {
                    if (otherTokens.contains(token)) {
                        score += 3;
                        continue;
                    }

                    if (lowerName.contains(token)) {
                        score += 1;
                    }
                }

                queue.add(Pair.of(user, score));
                while (queue.size() > resultsCount) {
                    queue.remove();
                }
            }
        } while (pageIndex < page.getTotalPages());

        List<User> matches = new ArrayList<>();

        while (queue.size() > 0) {
            matches.add(queue.remove().getFirst());
        }
        Collections.reverse(matches);

        return matches;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }

    public List<User> getSuggestions(Integer count) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDto user = UserMapper.toDto((User) auth.getPrincipal());
        List<User> friends = getFriends(user.getId());
        Map<User, Integer> mutualFriends = new HashMap<>();

        for (User friend : friends) {
            List<User> friendFriends = getFriends(friend.getId());
            for (User friendFriend : friendFriends) {
                if (friendFriend.getId().equals(user.getId()) || friends.contains(friendFriend) || mutualFriends.containsKey(friendFriend)) {
                    continue;
                }
                mutualFriends.put(friendFriend, getNumberMutualFriends(user.getId(), friendFriend.getId()));
            }
        }
        List<User> suggestions = new ArrayList<>(mutualFriends.keySet());
        suggestions.sort((o1, o2) -> mutualFriends.get(o2) - mutualFriends.get(o1));
        if (count <= suggestions.size()) {
            List<User> suggestionSlice = suggestions.subList(0, count);
            return suggestionSlice;
        } else {
            List<User> suggestionAdd = new ArrayList<>();
            for (User suggestion : suggestions) {
                List<User> friendsOfSuggestion = getFriends(suggestion.getId());
                for (User friendOfSuggestion : friendsOfSuggestion) {
                    if (friendOfSuggestion.getId().equals(user.getId()) || friends.contains(friendOfSuggestion) || suggestions.contains(friendOfSuggestion)) {
                        continue;
                    }
                    suggestionAdd.add(friendOfSuggestion);
                    if (suggestionAdd.size() == count - suggestions.size())
                        break;
                }
            }
            suggestions.addAll(suggestionAdd);
            if (count <= suggestions.size()) {
                List<User> suggestionSlice = suggestions.subList(0, count);
                return suggestionSlice;
            } else {
                suggestions.addAll(getRandomUserListForSuggestions(count - suggestions.size(), user.getId(), friends, suggestions));
                return suggestions;
            }
        }

    }


    public Integer getNumberMutualFriends(Integer userId1, Integer userId2) {
        List<User> friends1 = getFriends(userId1);
        List<User> friends2 = getFriends(userId2);
        int count = 0;
        for (User friend1 : friends1) {
            if (friends2.contains(friend1)) {
                count++;
            }
        }
        return count;
    }

    public User getRandomUser() {
        Random rand = new Random();
        int randomId = rand.nextInt(1, (int) userRepository.count() + 1);
        return userRepository.findById(randomId).orElse(null);
    }

    public List<User> getRandomUserListForSuggestions(int count, int userId, List<User> friends, List<User> suggestions) {
        List<User> randomUsers = new ArrayList<>();
        for (int i = 0; i < min(count, userRepository.count() - friends.size() - suggestions.size() - 1); i++) {
            User randomUser = getRandomUser();
            if (randomUser == null || randomUsers.contains(randomUser) || friends.contains(randomUser) || randomUser.getId().equals(userId) || suggestions.contains(randomUser)) {
                i--;
                continue;
            }
            randomUsers.add(randomUser);
        }
        return randomUsers;
    }

    public User setLoggedIn(int userId, boolean value){
        userRepository.updateUserLoggedInStatus(userId,value);
        return userRepository.findById(userId).get();
    }

    public List<Friendship> getFriendshipsOnline(int userId){
        return friendshipRepository.getLoggedFriends(userId);
    }

}
