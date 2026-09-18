package com.ayush.Backend_Spring_Boot.request;


import lombok.Data;

@Data
public class UpdateCartItemRequest {

    private Long cartItemId;
    private int quantity;

}