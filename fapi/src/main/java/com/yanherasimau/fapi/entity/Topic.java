package com.yanherasimau.fapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Topic {
    private long id;
    private String title;
    private boolean shared;
    private List<Question> questions;
}
