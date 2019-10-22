package com.yanherasimau.be.controller;

import com.yanherasimau.be.entity.User;
import com.yanherasimau.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public User get(@RequestParam long id) {
        return userService.getById(id);
    }

    @GetMapping("/all")
    public List<User> getAll(@RequestParam(name = "page") Integer page, @RequestParam(name = "page") Integer size) {
        return userService.getPage(page, size);
    }

    @PostMapping
    public User post(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
