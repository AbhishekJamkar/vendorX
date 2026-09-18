package com.ayush.Backend_Spring_Boot.repository;

import com.ayush.Backend_Spring_Boot.model.PasswordResetToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {
    PasswordResetToken findByToken(String token);
}