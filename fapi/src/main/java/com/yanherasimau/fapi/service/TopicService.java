package com.yanherasimau.fapi.service;

import com.yanherasimau.fapi.entity.Topic;

public interface TopicService {
    Topic save(Topic topic);
    Iterable<Topic> getShared();
}
