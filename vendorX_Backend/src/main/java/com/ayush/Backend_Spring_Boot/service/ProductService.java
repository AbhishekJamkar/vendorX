package com.ayush.Backend_Spring_Boot.service;

import java.util.List;
import com.ayush.Backend_Spring_Boot.Exception.ProductException;
import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.Category;
import com.ayush.Backend_Spring_Boot.model.Product;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.request.CreateProductRequest;

public interface ProductService {

    public Product createProduct(CreateProductRequest req,Category category,
                           Business business) throws ProductException, BusinessException;

    void deleteProduct(Long productId) throws ProductException;

    public List<Product> getBusinessesProduct(Long businessId,
                                         boolean isVegetarian, boolean isNonveg, boolean isSeasonal,String productCategory) throws ProductException;

    public List<Product> searchProduct(String keyword);

    public Product findProductById(Long productId) throws ProductException;

    public Product updateAvailibilityStatus(Long productId) throws ProductException;
}
