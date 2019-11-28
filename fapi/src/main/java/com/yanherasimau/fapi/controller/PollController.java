package com.yanherasimau.fapi.controller;

import com.yanherasimau.fapi.entity.Poll;
import com.yanherasimau.fapi.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/polls")
public class PollController {
    private PollService pollService;

    @Autowired
    public PollController(PollService pollService) {
        this.pollService = pollService;
    }

    @PostMapping
    public Poll save(@RequestBody Poll poll) {
        return pollService.save(poll);
    }

    @GetMapping("/{id}")
    public Poll get(@PathVariable(name = "id") long id) {
        return pollService.getById(id);
    }
}
