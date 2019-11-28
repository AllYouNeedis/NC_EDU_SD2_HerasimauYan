package com.yanherasimau.fapi.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Answer {
    private long id;
    private long questionId;
    private List<AnswerVariant> answerVariants;
}
