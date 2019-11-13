package com.yanherasimau.be.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "question_variant")
public class QuestionVariant {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "question_id")
  private long questionId;

  @Column(name = "element", nullable = false)
  private String element;

  public QuestionVariant() {
  }
}
