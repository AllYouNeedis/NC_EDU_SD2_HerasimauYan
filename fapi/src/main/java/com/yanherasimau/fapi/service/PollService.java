package com.yanherasimau.fapi.service;

import com.yanherasimau.fapi.entity.Poll;

public interface PollService {
    Poll save(Poll poll);
    Poll getById(long id);
}
