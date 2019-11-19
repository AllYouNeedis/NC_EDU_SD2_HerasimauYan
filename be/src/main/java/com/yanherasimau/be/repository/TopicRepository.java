package com.yanherasimau.be.repository;

import com.yanherasimau.be.entity.Topic;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TopicRepository extends PagingAndSortingRepository<Topic, Long> {
}
