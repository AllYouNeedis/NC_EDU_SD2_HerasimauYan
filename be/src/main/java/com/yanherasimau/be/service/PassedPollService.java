package com.yanherasimau.be.service;

import com.yanherasimau.be.entity.PassedPoll;

public interface PassedPollService {
    PassedPoll save(PassedPoll passedPoll);

    Iterable<PassedPoll> getPassedPollsByPollId(long pollId);
}
