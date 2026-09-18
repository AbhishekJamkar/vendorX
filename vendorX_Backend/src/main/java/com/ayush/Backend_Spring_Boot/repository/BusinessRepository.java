package com.ayush.Backend_Spring_Boot.repository;

import java.util.List;
import com.ayush.Backend_Spring_Boot.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BusinessRepository extends JpaRepository<Business, Long> {
    @Query("SELECT r FROM Business r WHERE lower(r.name) LIKE lower(concat('%', :query, '%')) OR lower(r.businessType) LIKE lower(concat('%', :query, '%'))")
    List<Business> findBySearchQuery(String query);
    Business findByOwnerId(Long userId);
}
