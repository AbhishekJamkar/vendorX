package com.ayush.Backend_Spring_Boot.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ayush.Backend_Spring_Boot.Exception.OrderException;
import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.Order;
import com.ayush.Backend_Spring_Boot.service.OrderService;
import com.ayush.Backend_Spring_Boot.service.UserService;

@RestController
@RequestMapping("/api/admin")
public class AdminOrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;


    @DeleteMapping("/order/{orderId}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long orderId) throws OrderException{
        if(orderId!=null) {
            orderService.cancelOrder(orderId);
            return ResponseEntity.ok("Order deleted with id)"+orderId);
        }else return new ResponseEntity<String>(HttpStatus.BAD_REQUEST) ;
    }


    @GetMapping("/order/business/{businessId}")
    public ResponseEntity<List<Order>> getAllBusinessOrders(
            @PathVariable Long businessId,
            @RequestParam(required = false) String order_status) throws OrderException, BusinessException{

        List<Order> orders = orderService.
                getOrdersOfBusiness(businessId,order_status);

//    		System.out.println("ORDER STATUS----- "+orderStatus);
        return ResponseEntity.ok(orders);



    }

    @PutMapping("/orders/{orderId}/{orderStatus}")
    public ResponseEntity<Order> updateOrders(@PathVariable Long orderId,@PathVariable String orderStatus) throws OrderException, BusinessException{

        Order orders = orderService.updateOrder(orderId, orderStatus);
        return ResponseEntity.ok(orders);

    }

}
