package com.yanherasimau.be.service;

import com.yanherasimau.be.entity.Poll;

public interface PollService {
    Poll save(Poll poll);

    Poll getById(long id);

    Iterable<Poll> getAll();
}
