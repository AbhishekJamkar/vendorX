package com.ayush.Backend_Spring_Boot.request;
import lombok.Data;
@Data
public class LoginRequest {
    private String email;
    private String password;
}