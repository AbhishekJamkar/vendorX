package com.ayush.Backend_Spring_Boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ayush.Backend_Spring_Boot.Exception.ProductException;
import com.ayush.Backend_Spring_Boot.model.Product;
import com.ayush.Backend_Spring_Boot.service.ProductService;
import com.ayush.Backend_Spring_Boot.service.UserService;

@RestController
@RequestMapping("/api/product")
public class CatalogItemController {
    @Autowired
    private ProductService catalogItemService;

    @Autowired
    private UserService userService;


    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProduct(
            @RequestParam String name)  {
        List<Product> catalogItem = catalogItemService.searchProduct(name);
        return ResponseEntity.ok(catalogItem);
    }
    @GetMapping("/business/{businessId}")
    public ResponseEntity<List<Product>> getCatalogItemByBusinessId(
            @PathVariable Long businessId,
            @RequestParam boolean vegetarian,
            @RequestParam boolean seasonal,
            @RequestParam boolean nonveg,
            @RequestParam(required = false) String product_category) throws ProductException {
        List<Product> catalogItems= catalogItemService.getBusinessesProduct(
                businessId,vegetarian,nonveg,seasonal,product_category);
        return ResponseEntity.ok(catalogItems);
    }



}
