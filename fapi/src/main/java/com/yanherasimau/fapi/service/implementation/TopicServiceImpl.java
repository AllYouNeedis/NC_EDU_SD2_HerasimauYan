package com.yanherasimau.fapi.service.implementation;

import com.yanherasimau.fapi.entity.Topic;
import com.yanherasimau.fapi.service.TopicService;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TopicServiceImpl implements TopicService {
    private final String apiRoute = "http://localhost:8081/api/topics";
    private final RestTemplate restTemplate = new RestTemplate();

    public TopicServiceImpl() {
    }

    @Override
    public Topic save(Topic topic) {
        HttpEntity<Topic> request = new HttpEntity<>(topic);
        return restTemplate.postForObject(apiRoute, request, Topic.class);
    }
}
