package com.yanherasimau.fapi.service.implementation;

import com.yanherasimau.fapi.entity.Poll;
import com.yanherasimau.fapi.service.PollService;
import org.springframework.http.HttpEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PollServiceImpl implements PollService {
    private final String apiRoute = "http://localhost:8081/api/polls";
    private final RestTemplate restTemplate = new RestTemplate();

    public PollServiceImpl() {
    }

    @Override
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public Poll save(Poll poll) {
        HttpEntity<Poll> request = new HttpEntity<>(poll);
        return restTemplate.postForObject(apiRoute, request, Poll.class);
    }

    @Override
    public Poll getById(long id) {
        return restTemplate.getForObject(apiRoute + "/" + id, Poll.class);
    }

    @Override
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public List<Poll> getBySubmitted(long id, boolean submitted) {
        Poll[] polls = restTemplate.getForObject(apiRoute + "?id="+id+"&submitted="+submitted, Poll[].class);
        if (polls != null)
            return  Arrays.stream(polls).collect(Collectors.toList());
        else
            return null;
    }
}
