package com.ayush.Backend_Spring_Boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ayush.Backend_Spring_Boot.model.IngredientsItem;

public interface IngredientsItemRepository extends JpaRepository<IngredientsItem, Long> {


    List<IngredientsItem> findByBusinessId(Long id);
    @Query("SELECT e FROM IngredientsItem e "
            + "WHERE e.business.id = :businessId "
            + "AND lower(e.name) = lower(:name)"
            + "AND e.category.name = :categoryName")
    public IngredientsItem findByBusinessIdAndNameIngoreCase(
            @Param("businessId") Long businessId,
            @Param("name") String name,
            @Param("categoryName") String categoryName);
}
