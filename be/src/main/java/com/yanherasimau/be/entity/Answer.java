package com.yanherasimau.be.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "answer")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Question question;

    @Column(name = "answer_text")
    private String answerText;

    @Column(name = "passed_poll_id", nullable = false)
    private long passedPollId;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "answerId")
    private List<AnswerVariant> answerVariants;

    public Answer() {
    }
}
