//package com.ayush.Backend_Spring_Boot.model;
//
//import java.util.List;
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Entity
//@AllArgsConstructor
//@NoArgsConstructor
//@Data
//@Table(name = "orders")
//public class OrderItem {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//    @ManyToOne
//    private Product product;
//    private int quantity;
//    private Long totalPrice;
//    private List<String> ingredients;
//
//
//
//}
//
//
package com.ayush.Backend_Spring_Boot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    private int quantity;
    private Long totalPrice;

    private List<String> ingredients;

}

