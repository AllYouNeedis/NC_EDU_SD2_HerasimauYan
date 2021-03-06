package com.yanherasimau.be.repository;

import com.yanherasimau.be.entity.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    User findByLoginAndPassword(String login, String password);
    User findByLogin(String login);
}
