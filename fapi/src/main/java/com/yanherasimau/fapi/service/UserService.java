package com.yanherasimau.fapi.service;

import com.yanherasimau.fapi.entity.User;

public interface UserService {
    User getById(long id);
    User findByLogin(String login);
    User saveUser(User user);
}
