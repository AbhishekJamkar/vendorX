package com.ayush.Backend_Spring_Boot.model;


import lombok.Data;

@Data
public class PaymentResponse {

    private String payment_url ;
    private Long orderId;
    private String paymentMethod;
    private String message;

}
