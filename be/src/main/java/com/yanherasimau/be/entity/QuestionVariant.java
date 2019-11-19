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

  @Column(name = "content", nullable = false)
  private String content;

  public QuestionVariant() {
  }
}
