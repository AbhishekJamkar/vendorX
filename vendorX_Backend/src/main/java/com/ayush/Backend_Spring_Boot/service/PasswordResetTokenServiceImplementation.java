package com.ayush.Backend_Spring_Boot.service;

import com.ayush.Backend_Spring_Boot.model.PasswordResetToken;
import com.ayush.Backend_Spring_Boot.repository.PasswordResetTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PasswordResetTokenServiceImplementation implements PasswordResetTokenService {
    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @Override
    public PasswordResetToken findByToken(String token) {
        PasswordResetToken passwordResetToken =passwordResetTokenRepository.findByToken(token);
        return passwordResetToken;
    }

    @Override
    public void delete(PasswordResetToken resetToken) {
        passwordResetTokenRepository.delete(resetToken);

    }

}
