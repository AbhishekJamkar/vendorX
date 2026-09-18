package com.ayush.Backend_Spring_Boot.service;


import com.stripe.exception.StripeException;
import com.ayush.Backend_Spring_Boot.model.Order;
import com.ayush.Backend_Spring_Boot.model.PaymentResponse;

public interface PaymentService {

    public PaymentResponse generatePaymentLink(Order order) throws StripeException;

}
