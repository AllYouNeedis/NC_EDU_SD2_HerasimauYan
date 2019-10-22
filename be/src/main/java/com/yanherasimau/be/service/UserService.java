package com.yanherasimau.be.service;

import com.yanherasimau.be.entity.User;
import com.yanherasimau.be.entity.UserTypeEnum;
import com.yanherasimau.be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(String login, String password, String email, String surname, String name, String patronymic,
                         long birthday) {
        Date currDate = new Date();
        Timestamp currTimestamp = new Timestamp(currDate.getTime());
        Timestamp birthdayTimestmap = new Timestamp(birthday);
        User user = new User(login, password, email, surname, name, patronymic, birthdayTimestmap,
                UserTypeEnum.AUTH_USER, currTimestamp);
        userRepository.save(user);
    }

    public ArrayList<User> getAll() {
        return (ArrayList<User>) userRepository.findAll();
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
