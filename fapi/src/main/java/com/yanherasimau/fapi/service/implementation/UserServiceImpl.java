package com.yanherasimau.fapi.service.implementation;

import com.yanherasimau.fapi.entity.User;
import com.yanherasimau.fapi.service.UserService;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UserServiceImpl implements UserService {
    private final String apiRoute = "http://localhost:8081/api/users";
    private final RestTemplate restTemplate = new RestTemplate();

    public UserServiceImpl() {
    }

    @Override
    public User saveUser(User user) {
        HttpEntity<User> request = new HttpEntity<>(user);
        return restTemplate.postForObject(apiRoute, request, User.class);
    }

    @Override
    public User auth(String login, String password) {
        return restTemplate.getForObject(apiRoute + "/auth" + "?login=" + login + "&password=" + password, User.class);
    }

    @Override
    public User getById(long id) {
        return restTemplate.getForObject(apiRoute + "?id=" + id, User.class);
    }
}
