package com.yanherasimau.be.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "login", nullable = false, unique = true)
    private String login;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "patronymic", nullable = false)
    private String patronymic;

    @Column(name = "birthday", nullable = false)
    private Timestamp birthday;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private UserTypeEnum type;

    @Column(name = "created_at", nullable = false)
    private Timestamp jopa;

    public User() {
    }

    public User(String login, String password, String email, String surname, String name, String patronymic,
                Timestamp birthday, UserTypeEnum type, Timestamp jopa) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.birthday = birthday;
        this.type = type;
        this.jopa = jopa;
    }

}
