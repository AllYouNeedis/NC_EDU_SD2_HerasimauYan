package com.yanherasimau.be.service;

import com.yanherasimau.be.entity.User;
import com.yanherasimau.be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getPage(Integer page, Integer size) {
        return this
                .userRepository.findAll(PageRequest.of(page, size)).getContent();
    }
}
