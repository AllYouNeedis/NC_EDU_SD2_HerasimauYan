package com.yanherasimau.fapi.entity;

import com.yanherasimau.fapi.entity.enums.UserRole;
import lombok.Data;

import java.sql.Timestamp;

@Data
public class User {

    private Long id;
    private String login;
    private String password;
    private String email;
    private String surname;
    private String name;
    private String patronymic;
    private Timestamp birthday;
    private UserRole userRole;

    public User() {
    }

}
