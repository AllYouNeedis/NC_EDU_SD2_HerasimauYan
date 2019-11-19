package com.yanherasimau.be.service.implementation;

import com.yanherasimau.be.entity.Topic;
import com.yanherasimau.be.repository.TopicRepository;
import com.yanherasimau.be.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicServiceImpl implements TopicService {
    private TopicRepository topicRepository;

    @Autowired
    public TopicServiceImpl(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    @Override
    public Topic save(Topic topic) {
        return topicRepository.save(topic);
    }
}
