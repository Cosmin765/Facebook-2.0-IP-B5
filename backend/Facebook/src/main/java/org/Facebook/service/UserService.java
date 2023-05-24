package org.Facebook.service;

import org.Facebook.config.AppSecurityConfig;
import org.Facebook.mapper.UserMapper;
import org.Facebook.model.dto.UserDto;
import org.Facebook.model.entity.FriendRequest;
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
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
import java.util.stream.Collectors;

import static java.lang.Math.min;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FriendshipRepository friendshipRepository;

    @Autowired
    private FriendRequestService friendRequestService;

    public void registerUser(User user) {
        String hashedPassword = AppSecurityConfig.getPasswordEncoder().encode(user.getPassword());
        user.setPassword(hashedPassword);
        user.setProfile_picture("461OH9a9vwscYS4vw-HyiQOs1bxHftWcSJXSaVYDJZ0=.jpg");
        user.setIsLoggedIn((short) 0);
        userRepository.save(user);
    }

    public List<UserDto> getUsers() {
        return userRepository.findAll().stream().map(UserMapper::toDto).toList();
    }

    public User getUser(int id) {
        return userRepository.findById(id).orElse(null);
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
        List<FriendRequest> friendRequestsReceived = friendRequestService.getFriendRequestsByUser(user);
        List<User> received = friendRequestsReceived.stream().map(FriendRequest::getSender).toList();
        List<FriendRequest> friendRequestsSent = friendRequestService.getFriendRequestsByUserSend(user);
        List<User> sent = friendRequestsSent.stream().map(FriendRequest::getReceiver).toList();
        List<User> friends = getFriends(user.getId());
        Set<User> friendsAndRequests = new HashSet<>();
        friendsAndRequests.addAll(friends);
        friendsAndRequests.addAll(received);
        friendsAndRequests.addAll(sent);
        //Map<User, Integer> mutualFriends = new HashMap<>();
        List<User> suggestions = friends.stream()
                .parallel()
                .flatMap(friend -> getFriends(friend.getId()).stream())
                .filter(friendFriend -> !friendFriend.getId().equals(user.getId())
                        && !friendsAndRequests.contains(friendFriend))
                .distinct()
                .collect(Collectors.toList());

        List<User> randomUsers = getRandomUserListForSuggestions(count - suggestions.size(), user.getId(), friendsAndRequests, suggestions);
        suggestions.addAll(randomUsers);

        if (count <= suggestions.size()) {
            List<User> suggestionSlice = suggestions.subList(0, count);
            return suggestionSlice;
        } else {

            return suggestions;
        }

    }


    public Integer getNumberMutualFriends(Integer userId1, Integer userId2) {
        List<User> friends1 = getFriends(userId1);
        List<User> friends2 = getFriends(userId2);
        return (int) friends1.stream()
                .filter(friends2::contains)
                .count();
    }


    public List<User> getRandomUserListForSuggestions(int count, int userId, Set<User> friendsAndRequests, List<User> suggestions) {
        Random rand = new Random();
        List<User> allUsers = userRepository.findAll();
        Collections.shuffle(allUsers);
        List<User> randomUsers = new ArrayList<>();
        int maxCount = (int) min(count, userRepository.count() - friendsAndRequests.size() - suggestions.size() - 1);
        while (randomUsers.size() < maxCount) {
            int randomId = rand.nextInt(0, allUsers.size());
            User randomUser = allUsers.get(randomId);
            if (randomUser != null && !randomUser.getId().equals(userId)
                    && !randomUsers.contains(randomUser) && !friendsAndRequests.contains(randomUser)
                    && !suggestions.contains(randomUser)) {
                randomUsers.add(randomUser);
                allUsers.remove(randomUser);
            }
        }
        return randomUsers;
    }

    public User setLoggedIn(int userId, boolean value) {
        userRepository.updateUserLoggedInStatus(userId, value);
        return userRepository.findById(userId).get();
    }

    public List<Friendship> getFriendshipsOnline(int userId) {
        return friendshipRepository.getLoggedFriends(userId);
    }

    public User updateName(Integer id, String firstName, String lastName) {
        userRepository.updateUserName(id, firstName, lastName);
        return userRepository.findById(id).get();
    }

    public User updateBio(Integer id, String bio) {
        userRepository.updateUserBio(id, bio);
        return userRepository.findById(id).get();
    }

    public void updateProfile(String imageString,Integer id){

        userRepository.updateProfilePicture(id,imageString);
    }
}
