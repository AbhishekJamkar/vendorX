package com.ayush.Backend_Spring_Boot.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ayush.Backend_Spring_Boot.model.IngredientCategory;

public interface IngredientsCategoryRepository
        extends JpaRepository<IngredientCategory, Long>{


    //	List<IngredientCategory> findByProductId(Long catalogItemId);
    List<IngredientCategory> findByBusinessId(Long id);

    @Query("SELECT e FROM IngredientCategory e "
            + "WHERE e.business.id = :businessId "
            + "AND lower(e.name) = lower(:name)")
    IngredientCategory findByBusinessIdAndNameIgnoreCase(
            @Param("businessId") Long businessId, @Param("name") String name);
}
