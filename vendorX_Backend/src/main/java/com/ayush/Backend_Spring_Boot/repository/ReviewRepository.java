package com.ayush.Backend_Spring_Boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayush.Backend_Spring_Boot.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}