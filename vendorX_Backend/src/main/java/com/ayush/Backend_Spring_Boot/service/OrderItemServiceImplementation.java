package com.ayush.Backend_Spring_Boot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.Backend_Spring_Boot.model.OrderItem;
import com.ayush.Backend_Spring_Boot.repository.OrderItemRepository;
@Service
public class OrderItemServiceImplementation implements OrderItemService {
    @Autowired
    private OrderItemRepository orderItemRepository;

    @Override
    public OrderItem createOrderIem(OrderItem orderItem) {

        OrderItem newOrderItem=new OrderItem();
//	    	newOrderItem.setCatalogItem(orderItem.getCatalogItem());
//	    	newOrderItem.setOrder(orderItem.getOrder());
        newOrderItem.setQuantity(orderItem.getQuantity());
        return orderItemRepository.save(newOrderItem);
    }












}
