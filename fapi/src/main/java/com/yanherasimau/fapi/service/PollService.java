package com.yanherasimau.fapi.service;

import com.yanherasimau.fapi.entity.Poll;

import java.util.List;

public interface PollService {
    Poll save(Poll poll);
    Poll getById(long id);
    List<Poll> getBySubmitted(long id, boolean submitted);
}
