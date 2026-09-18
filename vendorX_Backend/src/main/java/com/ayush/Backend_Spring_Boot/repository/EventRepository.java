package com.ayush.Backend_Spring_Boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayush.Backend_Spring_Boot.model.Events;

public interface EventRepository extends JpaRepository<Events, Long>{

    public List<Events> findEventsByBusinessId(Long id);
}