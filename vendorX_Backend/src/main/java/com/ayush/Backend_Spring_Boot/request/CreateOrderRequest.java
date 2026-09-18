package com.ayush.Backend_Spring_Boot.request;
import com.ayush.Backend_Spring_Boot.model.Address;
import lombok.Data;
@Data
public class CreateOrderRequest {
    private Long businessId;
    /** DELIVERY requires an address; PICKUP lets the customer collect with the order ID. */
    private String fulfillmentMethod = "DELIVERY";
    /** ONLINE opens Stripe; COD reserves the order for cash payment. */
    private String paymentMethod = "ONLINE";
    private Address deliveryAddress;
}
