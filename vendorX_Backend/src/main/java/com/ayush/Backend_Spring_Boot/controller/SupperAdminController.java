package com.ayush.Backend_Spring_Boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.service.UserService;

@RestController
public class SupperAdminController {

    @Autowired
    private UserService userService;

    @GetMapping("/api/customers")
    public ResponseEntity<List<User>> getAllCustomers() {

        List<User> users =userService.findAllUsers();

        return new ResponseEntity<>(users,HttpStatus.ACCEPTED);

    }

    @GetMapping("/api/pending-customers")
    public ResponseEntity<List<User>> getPenddingBusinessUser(){
        List<User> users=userService.getPenddingBusinessOwner();
        return new ResponseEntity<List<User>>(users,HttpStatus.ACCEPTED);

    }
}
