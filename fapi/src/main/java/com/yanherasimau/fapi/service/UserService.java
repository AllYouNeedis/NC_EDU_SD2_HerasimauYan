package com.yanherasimau.fapi.service;

import com.yanherasimau.fapi.entity.User;

public interface UserService {
    User getById(long id);
    User saveUser(User user);
    User auth(String login, String password);
}
