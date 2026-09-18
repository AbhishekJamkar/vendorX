package com.ayush.Backend_Spring_Boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ayush.Backend_Spring_Boot.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {


    List<Product> findByBusinessId(Long businessId);

    @Query("SELECT f FROM Product f WHERE "
            + "f.name LIKE %:keyword% OR "
            + "f.productCategory.name LIKE %:keyword% AND "
            + "f.business!=null"
    )
    List<Product> searchByNameOrCategory(@Param("keyword") String keyword);




}
