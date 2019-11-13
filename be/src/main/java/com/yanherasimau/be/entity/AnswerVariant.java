package com.yanherasimau.be.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "answer_variant")
public class AnswerVariant {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "answer_id")
  private long answerId;

  @OneToOne()
  @JoinColumn(name = "question_variant_id", nullable = false)
  private QuestionVariant questionVariant;

  public AnswerVariant() {
  }
}
