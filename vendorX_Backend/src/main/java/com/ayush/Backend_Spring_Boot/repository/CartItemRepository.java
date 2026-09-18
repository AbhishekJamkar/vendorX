package com.ayush.Backend_Spring_Boot.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.ayush.Backend_Spring_Boot.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


//    CartItem findByProductIsContaining

}
