package com.ayush.Backend_Spring_Boot.response;

import lombok.Data;
import com.ayush.Backend_Spring_Boot.domain.USER_ROLE;
@Data
public class AuthResponse {
    private String message;
    private String jwt;
    private USER_ROLE role;
}