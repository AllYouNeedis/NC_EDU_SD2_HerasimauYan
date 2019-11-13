package com.yanherasimau.be.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "passed_poll")
public class PassedPoll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "poll_id")
    private long pollId;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "passedPollId")
    private List<Answer> answers;

    public PassedPoll() {
    }
}
