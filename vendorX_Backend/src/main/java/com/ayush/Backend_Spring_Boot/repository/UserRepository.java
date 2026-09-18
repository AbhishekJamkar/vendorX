package com.ayush.Backend_Spring_Boot.repository;

import java.util.List;

import com.ayush.Backend_Spring_Boot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u Where u.status='PENDING'")
    public List<User> getPenddingBusinessOwners();
    public User findByEmail(String username);
}