package com.yanherasimau.be.repository;

import com.yanherasimau.be.entity.Topic;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends PagingAndSortingRepository<Topic, Long> {
    Iterable<Topic> findAllByShared(boolean shared);
}
