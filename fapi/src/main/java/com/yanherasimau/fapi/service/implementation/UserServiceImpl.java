package com.yanherasimau.fapi.service.implementation;

import com.yanherasimau.fapi.entity.User;
import com.yanherasimau.fapi.service.UserService;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashSet;
import java.util.Set;

@Service("customUserDetailsService")
@NoArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {
    private final String apiRoute = "http://localhost:8081/api/users";
    private final RestTemplate restTemplate = new RestTemplate();
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImpl(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public User saveUser(User user) {
        HttpEntity<User> request = new HttpEntity<>(user);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return restTemplate.postForObject(apiRoute, request, User.class);
    }

    public ResponseEntity current() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = findByLogin(((UserDetails)authentication.getPrincipal()).getUsername());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @Override
    public User getById(long id) {
        return restTemplate.getForObject(apiRoute + "/" + id, User.class);
    }

    @Override
    public User findByLogin(String login) {
        User user = restTemplate.getForObject(apiRoute + "/login/" + login, User.class);
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = findByLogin(login);
        if (null == user) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        log.info(user.toString());
        return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getUserRole().name()));
        return authorities;
    }
}
