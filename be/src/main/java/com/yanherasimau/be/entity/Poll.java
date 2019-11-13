package com.yanherasimau.be.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "poll")
public class Poll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "submitted", nullable = false)
    private long submitted;

    @Column(name = "user_id")
    private long userId;


    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "poll_id")
    private List<Question> questions;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "poll_id")
    private List<Topic> topics;

//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pollId")
//    private List<PassedPoll> passedPolls;

    public Poll() {
    }
}
