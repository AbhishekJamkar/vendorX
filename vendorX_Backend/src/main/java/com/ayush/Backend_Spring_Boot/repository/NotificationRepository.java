package com.ayush.Backend_Spring_Boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ayush.Backend_Spring_Boot.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

    public List<Notification> findByCustomerId(Long userId);
    public List<Notification> findByBusinessId(Long businessId);

}