package com.yanherasimau.fapi.service.implementation;

import com.yanherasimau.fapi.entity.Topic;
import com.yanherasimau.fapi.service.TopicService;
import org.springframework.http.HttpEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.stream.Collectors;

@Service
public class TopicServiceImpl implements TopicService {
    private final String apiRoute = "http://localhost:8081/api/topics";
    private final RestTemplate restTemplate = new RestTemplate();

    public TopicServiceImpl() {
    }

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Topic save(Topic topic) {
        HttpEntity<Topic> request = new HttpEntity<>(topic);
        return restTemplate.postForObject(apiRoute, request, Topic.class);
    }

    @Override
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public Iterable<Topic> getShared() {
      Topic[] topics =  restTemplate.getForObject(apiRoute + "/all/shared", Topic[].class);
        assert topics != null;
        return Arrays.stream(topics).collect(Collectors.toList());
    }
}
