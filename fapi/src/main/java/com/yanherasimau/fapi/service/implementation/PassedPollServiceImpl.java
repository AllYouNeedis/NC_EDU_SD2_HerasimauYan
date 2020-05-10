package com.yanherasimau.fapi.service.implementation;

import com.yanherasimau.fapi.entity.PassedPoll;
import com.yanherasimau.fapi.service.PassedPollService;
import org.springframework.http.HttpEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PassedPollServiceImpl implements PassedPollService {
    private final String apiRoute = "http://localhost:8081/api/passedPolls";
    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public PassedPoll save(PassedPoll passedPoll) {
        HttpEntity<PassedPoll> request = new HttpEntity<>(passedPoll);
        return restTemplate.postForObject(apiRoute, request, PassedPoll.class);
    }

    @Override
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public List<PassedPoll> getPassedPollsByPollId(long pollId) {
        PassedPoll[] passedPolls = restTemplate.getForObject(apiRoute+"?pollId="+pollId, PassedPoll[].class);
        if (passedPolls != null)
            return  Arrays.stream(passedPolls).collect(Collectors.toList());
        else
            return null;
    }
}
