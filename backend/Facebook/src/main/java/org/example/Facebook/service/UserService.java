package org.example.Facebook.service;
import org.example.Facebook.model.User;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.List;
import java.util.Map;
@Service
public class UserService {
List <User>listaUseri=new ArrayList();
    public void registerUser(User user) {
listaUseri.add(user);
    }
    public List<User> getUsers() {
        return this.listaUseri;
    }

}
