package com.yanherasimau.be.service;

import com.yanherasimau.be.entity.User;

import java.util.List;

public interface UserService {
    User getById(long id);
    List<User> getPage(Integer page, Integer size);
    User saveUser(User user);
    User auth(String login, String password);
}
