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

  @Column(name = "content")
  private String content;

  public AnswerVariant() {
  }
}
