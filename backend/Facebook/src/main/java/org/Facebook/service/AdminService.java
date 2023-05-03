package org.Facebook.service;

import org.Facebook.model.entity.Post;
import org.Facebook.model.entity.User;
import org.Facebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.*;

@Service
public class AdminService {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    public Integer accessLevel;
    public boolean banUser(User user) {
    return false;
    }
    public boolean unbanUser(User user) {
    return false;
    }
    public void deleteAnyPost(Post post) {}

    public void getFriendshipGraphRec(User user, int level, Pair<Set<Pair<User, User>>, Map<Integer, Integer>> graph) {
        if(level == 0) {
            return;
        }

        var links = graph.getFirst();
        var groupMapping = graph.getSecond();

        for(User other : userService.getFriends(user.getId())) {
            Pair<User, User> link = user.getId() < other.getId() ? Pair.of(user, other) : Pair.of(other, user);
            if(links.contains(link)) {
                continue;
            }

            groupMapping.put(other.getId(), level);
            links.add(link);
            getFriendshipGraphRec(other, level - 1, graph);
        }
    }

    public Pair<Set<Pair<User, User>>, Map<Integer, Integer>> getFriendshipGraph(int userId, int level) {
        Pair<Set<Pair<User, User>>, Map<Integer, Integer>> graph = Pair.of(new HashSet<>(), new HashMap<>());

        graph.getSecond().put(userId, level + 1);

        User user = userRepository.getById(userId);

        getFriendshipGraphRec(user, level, graph);
        return graph;
    }
}