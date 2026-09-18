package com.ayush.Backend_Spring_Boot.controller;


import java.util.List;


import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.service.CategoryService;
import com.ayush.Backend_Spring_Boot.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ayush.Backend_Spring_Boot.Exception.ProductException;
import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.Exception.UserException;
import com.ayush.Backend_Spring_Boot.model.Product;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.request.CreateProductRequest;
import com.ayush.Backend_Spring_Boot.service.ProductService;
import com.ayush.Backend_Spring_Boot.service.UserService;

@RestController
@RequestMapping("/api/admin/product")
public class AdminCatalogItemController {

    @Autowired
    private ProductService catalogItemService;
    @Autowired
    private UserService userService;
    @Autowired
    private BusinessService businessService;
    @Autowired
    private CategoryService categoryService;

    @PostMapping()
    public ResponseEntity<Product> createItem(
            @RequestBody CreateProductRequest item,
            @RequestHeader("Authorization") String jwt)
            throws ProductException, UserException, BusinessException {
        System.out.println("req-controller ----"+item);
        User user = userService.findUserProfileByJwt(jwt);
//		Category category=categoryService.findCategoryById(item.getCategoryId());
        Business business=businessService.findBusinessById(item.getBusinessId());
        Product catalogItem = catalogItemService.createProduct(item,item.getCategory(),business);
        return ResponseEntity.ok(catalogItem);

    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable Long id, @RequestHeader("Authorization") String jwt)
            throws UserException, ProductException {
        User user = userService.findUserProfileByJwt(jwt);

        catalogItemService.deleteProduct(id);
        return ResponseEntity.ok("Menu item deleted");


    }



    @GetMapping("/search")
    public ResponseEntity<List<Product>> getCatalogItemByName(@RequestParam String name)  {
        List<Product> catalogItem = catalogItemService.searchProduct(name);
        return ResponseEntity.ok(catalogItem);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Product> updateAvilibilityStatus(
            @PathVariable Long id) throws ProductException {
        Product catalogItems= catalogItemService.updateAvailibilityStatus(id);
        return ResponseEntity.ok(catalogItems);
    }



}
