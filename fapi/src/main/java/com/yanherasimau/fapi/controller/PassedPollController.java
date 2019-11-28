package com.yanherasimau.fapi.controller;

import com.yanherasimau.fapi.entity.PassedPoll;
import com.yanherasimau.fapi.service.PassedPollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/passedPolls")
public class PassedPollController {
    private PassedPollService passedPollService;

    @Autowired
    public PassedPollController(PassedPollService passedPollService) {
        this.passedPollService = passedPollService;
    }

    @PostMapping
    public PassedPoll save(@RequestBody PassedPoll passedPoll) {
        return passedPollService.save(passedPoll);
    }
}
