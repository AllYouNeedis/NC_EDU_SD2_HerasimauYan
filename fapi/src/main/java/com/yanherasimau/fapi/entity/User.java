package com.yanherasimau.fapi.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.yanherasimau.fapi.entity.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    private Long id;
    private String login;
    private String password;
    private String email;
    private String surname;
    private String name;
    private String patronymic;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Timestamp birthday;
    private UserRole userRole;
}
