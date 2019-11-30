package com.yanherasimau.be.service.implementation;

import com.yanherasimau.be.entity.PassedPoll;
import com.yanherasimau.be.entity.Poll;
import com.yanherasimau.be.repository.PassedPollRepository;
import com.yanherasimau.be.repository.PollRepository;
import com.yanherasimau.be.service.PassedPollService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PassedPollServiceImpl implements PassedPollService {

    PassedPollRepository passedPollRepository;

    @Autowired
    public PassedPollServiceImpl(PassedPollRepository passedPollRepository) {
        this.passedPollRepository = passedPollRepository;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public PassedPoll save(PassedPoll passedPoll) {
        return this.passedPollRepository.save(passedPoll);
    }

    @Override
    public Iterable<PassedPoll> getPassedPollsByPollId(long pollId) {
        return passedPollRepository.findAllByPollId(pollId);
    }
}
