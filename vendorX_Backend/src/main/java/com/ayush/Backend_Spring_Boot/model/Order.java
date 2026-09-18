package com.ayush.Backend_Spring_Boot.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User customer;

    @JsonIgnore
    @ManyToOne
    private Business business;

    private Long totalAmount;

    private String orderStatus;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @ManyToOne
    private Address deliveryAddress;

    private String fulfillmentMethod;
    private String paymentMethod;

    //	@JsonIgnore
    @OneToMany
    private List<OrderItem> items;

    @OneToOne
    private Payment payment;

    private int totalItem;

    private int totalPrice;

}
