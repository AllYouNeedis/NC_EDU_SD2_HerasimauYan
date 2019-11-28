package com.yanherasimau.fapi.service.implementation;

import com.yanherasimau.fapi.entity.PassedPoll;
import com.yanherasimau.fapi.service.PassedPollService;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PassedPollServiceImpl implements PassedPollService {
    private final String apiRoute = "http://localhost:8081/api/passedPolls";
    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public PassedPoll save(PassedPoll passedPoll) {
        HttpEntity<PassedPoll> request = new HttpEntity<>(passedPoll);
        return restTemplate.postForObject(apiRoute, request, PassedPoll.class);
    }
}
