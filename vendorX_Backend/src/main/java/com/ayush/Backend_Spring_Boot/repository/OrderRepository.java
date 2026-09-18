package com.ayush.Backend_Spring_Boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ayush.Backend_Spring_Boot.model.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {
    @Query("SELECT o FROM Order o WHERE o.customer.id = :userId")
    List<Order> findAllUserOrders(@Param("userId")Long userId);

    @Query("SELECT o FROM Order o WHERE o.business.id = :businessId")
    List<Order> findOrdersByBusinessId(@Param("businessId") Long businessId);

}