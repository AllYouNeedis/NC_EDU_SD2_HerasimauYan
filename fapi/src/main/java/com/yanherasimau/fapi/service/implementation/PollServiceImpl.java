package com.yanherasimau.fapi.service.implementation;

import com.yanherasimau.fapi.entity.Poll;
import com.yanherasimau.fapi.service.PollService;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PollServiceImpl implements PollService {
    private final String apiRoute = "http://localhost:8081/api/polls";
    private final RestTemplate restTemplate = new RestTemplate();

    public PollServiceImpl() {
    }

    @Override
    public Poll save(Poll poll) {
        HttpEntity<Poll> request = new HttpEntity<>(poll);
        return restTemplate.postForObject(apiRoute, request, Poll.class);
    }

    @Override
    public Poll getById(long id) {
        return restTemplate.getForObject(apiRoute + "/" + id, Poll.class);
    }
}
