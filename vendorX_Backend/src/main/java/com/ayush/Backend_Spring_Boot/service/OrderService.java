package com.ayush.Backend_Spring_Boot.service;

import java.util.List;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.Exception.CartException;
import com.ayush.Backend_Spring_Boot.Exception.OrderException;
import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.Exception.UserException;
import com.ayush.Backend_Spring_Boot.model.Order;
import com.ayush.Backend_Spring_Boot.model.PaymentResponse;
import com.ayush.Backend_Spring_Boot.request.CreateOrderRequest;
import com.stripe.exception.StripeException;

public interface OrderService {

    public PaymentResponse createOrder(CreateOrderRequest order, User user) throws UserException, BusinessException, CartException, StripeException;

    public Order updateOrder(Long orderId, String orderStatus) throws OrderException;

    public void cancelOrder(Long orderId) throws OrderException;

    public List<Order> getUserOrders(Long userId) throws OrderException;

    public List<Order> getOrdersOfBusiness(Long businessId,String orderStatus) throws OrderException, BusinessException;


}
