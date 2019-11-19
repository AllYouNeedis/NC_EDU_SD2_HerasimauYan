package com.yanherasimau.fapi.entity;

import com.yanherasimau.fapi.entity.enums.QuestionType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    private long id;
    private String title;
    private QuestionType type;
    private boolean required;
    private List<QuestionVariant> questionVariants;
}
