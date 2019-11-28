package com.yanherasimau.fapi.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Poll {
    private long id;
    private String title;
    private boolean submitted;
    private long userId;
    private List<Question> questions;
    private List<Topic> topics;
    private List<PassedPoll> passedPolls;
}
