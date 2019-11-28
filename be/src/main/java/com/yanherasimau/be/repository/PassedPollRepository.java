package com.yanherasimau.be.repository;

import com.yanherasimau.be.entity.PassedPoll;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassedPollRepository extends PagingAndSortingRepository<PassedPoll, Long> {
}
