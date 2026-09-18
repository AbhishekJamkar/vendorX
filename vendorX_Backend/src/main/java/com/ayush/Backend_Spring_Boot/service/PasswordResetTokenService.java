package com.ayush.Backend_Spring_Boot.service;

import com.ayush.Backend_Spring_Boot.model.PasswordResetToken;

public interface PasswordResetTokenService {

    public PasswordResetToken findByToken(String token);

    public void delete(PasswordResetToken resetToken);

}
