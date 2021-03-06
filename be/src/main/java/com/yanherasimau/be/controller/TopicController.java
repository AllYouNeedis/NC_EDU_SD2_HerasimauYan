package com.yanherasimau.be.controller;

import com.yanherasimau.be.entity.Topic;
import com.yanherasimau.be.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/topics")
public class TopicController {
    private TopicService topicService;

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @PostMapping
    public Topic save(@RequestBody Topic topic) {
        return topicService.save(topic);
    }

    @GetMapping("/all/shared")
    public Iterable<Topic> getShared() {
        return topicService.getShared();
    }
}
