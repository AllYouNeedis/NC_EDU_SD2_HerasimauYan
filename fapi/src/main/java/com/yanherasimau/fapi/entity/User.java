package com.yanherasimau.fapi.entity;

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
    private Long userRoleId;

    public User() {
    }

}
