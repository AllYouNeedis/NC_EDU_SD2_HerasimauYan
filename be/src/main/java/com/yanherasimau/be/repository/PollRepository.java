package com.yanherasimau.be.repository;

import com.yanherasimau.be.entity.Poll;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PollRepository extends PagingAndSortingRepository<Poll, Long> {
//    @Query("select new Poll(poll.id) from Poll poll")
//    List<Poll> getMinimized();
}
