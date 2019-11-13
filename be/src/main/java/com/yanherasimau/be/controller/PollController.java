package com.yanherasimau.be.controller;

import com.yanherasimau.be.entity.Poll;
import com.yanherasimau.be.service.PollService;
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

    @GetMapping("/all")
    public Iterable<Poll> getAll() {
        return pollService.getAll();
    }

    @GetMapping
    public Poll get(@RequestParam long id) {
        return pollService.getById(id);
    }
}
