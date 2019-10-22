package com.yanherasimau.fapi.service;

import com.yanherasimau.fapi.entity.User;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class UserService {
    private final String apiRoute = "http://localhost:8081/api/users";
    private final RestTemplate restTemplate = new RestTemplate();
    public UserService() {
    }

    public User saveUser(User user) {
        HttpEntity<User> request = new HttpEntity<>(user);
        return restTemplate.postForObject(apiRoute, request, User.class);
    }

    public List<User> getPage(Integer page, Integer size) {
        return null;
    }

    public User getById(long id) {
        return restTemplate.getForObject(apiRoute+"?id="+id,User.class);
    }
}
