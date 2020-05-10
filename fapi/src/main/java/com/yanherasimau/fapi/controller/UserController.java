package com.yanherasimau.fapi.controller;

import com.yanherasimau.fapi.entity.User;
import com.yanherasimau.fapi.service.implementation.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping
    public User get(@RequestParam long id) {
        return userService.getById(id);
    }



    @GetMapping("/current")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity current() {
        return userService.current();
    }

    @PostMapping("/signup")
    public User post(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
