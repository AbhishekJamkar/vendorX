package com.ayush.Backend_Spring_Boot.domain;

public enum OrderStatus {
    RECEIVED,
    PENDING,
    READY_FOR_PICKUP,
    OUT_FOR_DELIVERY,
    DELIVERED,
    CANCELLED
}
