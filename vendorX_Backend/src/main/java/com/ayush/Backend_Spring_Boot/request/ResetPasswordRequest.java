package com.ayush.Backend_Spring_Boot.request;
import lombok.Data;
@Data
public class ResetPasswordRequest {
    private String password;
    private String token;
}
