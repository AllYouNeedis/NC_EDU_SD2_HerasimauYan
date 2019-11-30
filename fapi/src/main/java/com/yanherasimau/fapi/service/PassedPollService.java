package com.yanherasimau.fapi.service;

import com.yanherasimau.fapi.entity.PassedPoll;

import java.util.List;

public interface PassedPollService {
    PassedPoll save(PassedPoll passedPoll);
    List<PassedPoll> getPassedPollsByPollId(long pollId);
}
