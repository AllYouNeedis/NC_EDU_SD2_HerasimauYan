package com.yanherasimau.fapi.controller;

import com.yanherasimau.fapi.entity.Topic;
import com.yanherasimau.fapi.service.TopicService;
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
