package com.yanherasimau.be.service.implementation;

import com.yanherasimau.be.entity.User;
import com.yanherasimau.be.repository.UserRepository;
import com.yanherasimau.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getPage(Integer page, Integer size) {
        return this
                .userRepository.findAll(PageRequest.of(page, size)).getContent();
    }
}
