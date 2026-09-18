package com.ayush.Backend_Spring_Boot.repository;

import java.util.Optional;
import com.ayush.Backend_Spring_Boot.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByCustomer_Id(Long userId);
}