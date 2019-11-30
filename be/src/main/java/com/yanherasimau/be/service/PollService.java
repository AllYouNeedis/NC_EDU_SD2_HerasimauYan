package com.yanherasimau.be.service;

import com.yanherasimau.be.entity.Poll;

import java.util.List;

public interface PollService {
    Poll save(Poll poll);
    Poll getById(long id);
    Iterable<Poll> getAll();
    List<Poll> getBySubmitted(long id, boolean submitted);
}
