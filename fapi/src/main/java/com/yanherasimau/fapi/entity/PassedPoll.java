package com.yanherasimau.fapi.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PassedPoll {
    private long id;
    private long pollId;
    private List<Answer> answers;
}
