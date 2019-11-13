package com.yanherasimau.be.repository;

import com.yanherasimau.be.entity.Poll;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PollRepository extends PagingAndSortingRepository<Poll, Long> {
}
