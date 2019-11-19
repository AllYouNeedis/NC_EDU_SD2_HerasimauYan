package com.yanherasimau.be.service.implementation;

import com.yanherasimau.be.entity.Poll;
import com.yanherasimau.be.repository.PollRepository;
import com.yanherasimau.be.service.PollService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PollServiceImpl implements PollService {

    private PollRepository pollRepository;

    @Autowired
    public PollServiceImpl(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Iterable<Poll> getAll() {
        Iterable<Poll> polls = pollRepository.findAll();
        polls.forEach( poll -> {
            Hibernate.initialize(poll.getQuestions());
            Hibernate.initialize(poll.getTopics());
        });
        return polls;
    }

    @Override
    public Poll save(Poll poll) {
        pollRepository.save(poll);
        return poll;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Poll getById(long id) {
        Poll poll = pollRepository.findById(id).orElse(null);
        assert poll != null;
        Hibernate.initialize(poll.getQuestions());
        Hibernate.initialize(poll.getTopics());
        return poll;
    }


}
