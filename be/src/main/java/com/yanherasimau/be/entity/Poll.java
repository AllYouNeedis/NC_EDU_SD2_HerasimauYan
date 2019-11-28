package com.yanherasimau.be.entity;


import lombok.Data;

import javax.persistence.*;
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
    private boolean submitted;

    @Column(name = "user_id")
    private long userId;


    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "poll_id")
    private List<Question> questions;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "poll_id")
    private List<Topic> topics;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pollId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PassedPoll> passedPolls;

    public Poll() {
    }
}
