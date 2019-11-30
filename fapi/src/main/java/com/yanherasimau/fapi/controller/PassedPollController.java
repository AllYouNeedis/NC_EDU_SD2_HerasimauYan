package com.yanherasimau.fapi.controller;

import com.yanherasimau.fapi.entity.PassedPoll;
import com.yanherasimau.fapi.service.PassedPollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    public List<PassedPoll> getPassedPollsByPollId(@RequestParam(name = "pollId") long pollId) {
        return passedPollService.getPassedPollsByPollId(pollId);
    }

}
