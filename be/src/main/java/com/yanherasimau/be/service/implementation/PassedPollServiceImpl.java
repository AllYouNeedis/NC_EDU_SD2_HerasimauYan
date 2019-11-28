package com.yanherasimau.be.service.implementation;

import com.yanherasimau.be.entity.PassedPoll;
import com.yanherasimau.be.entity.Poll;
import com.yanherasimau.be.repository.PollRepository;
import com.yanherasimau.be.service.PassedPollService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class PassedPollServiceImpl implements PassedPollService {

    PollRepository pollRepository;

    @Autowired
    public PassedPollServiceImpl(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public PassedPoll save(PassedPoll passedPoll) {
        System.out.println(passedPoll);
        Optional<Poll> byId = pollRepository.findById(passedPoll.getPollId());
        if (byId.isPresent()){
            Poll poll = byId.get();
            Hibernate.initialize(poll.getPassedPolls());
            poll.getPassedPolls().add(passedPoll);
            pollRepository.save(poll);
        } else {

        }
        return null;
    }
}
