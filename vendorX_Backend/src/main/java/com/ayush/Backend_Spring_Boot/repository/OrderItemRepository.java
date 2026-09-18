package com.ayush.Backend_Spring_Boot.repository;

import com.ayush.Backend_Spring_Boot.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}