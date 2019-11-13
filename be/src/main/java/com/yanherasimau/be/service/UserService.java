package com.yanherasimau.be.service;

import com.yanherasimau.be.entity.User;

import java.util.List;

public interface UserService {
    User getById(long id);
    User saveUser(User user);
    List<User> getPage(Integer page, Integer size);
}
