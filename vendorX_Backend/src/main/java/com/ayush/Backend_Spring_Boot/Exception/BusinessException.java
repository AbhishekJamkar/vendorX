package com.ayush.Backend_Spring_Boot.Exception;

public class BusinessException extends Exception {
    private static final long serialVersionUID = 1L;
    public BusinessException(String message) {
        super(message);
    }
}