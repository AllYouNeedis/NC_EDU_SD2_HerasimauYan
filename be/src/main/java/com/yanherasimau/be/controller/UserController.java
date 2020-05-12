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

    @GetMapping("/login/{login}")
    public User getUserByLogin(@PathVariable String login) {
        return userService.getByLogin(login);
    }

    @GetMapping("/all")
    public List<User> getAll(@RequestParam(name = "page") Integer page, @RequestParam(name = "size") Integer size) {
        return userService.getPage(page, size);
    }

    @PostMapping
    public User post(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
