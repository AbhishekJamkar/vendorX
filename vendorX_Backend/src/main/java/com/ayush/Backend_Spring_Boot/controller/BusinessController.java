package com.ayush.Backend_Spring_Boot.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.Exception.UserException;
import com.ayush.Backend_Spring_Boot.dto.BusinessDto;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.service.BusinessService;
import com.ayush.Backend_Spring_Boot.service.UserService;

@RestController
@RequestMapping("/api/businesses")
public class BusinessController {

    @Autowired
    private BusinessService businessService;

    @Autowired
    private UserService userService;


    @GetMapping("/search")
    public ResponseEntity<List<Business>> findBusinessByName(
            @RequestParam String keyword) {
        List<Business> business = businessService.searchBusiness(keyword);

        return ResponseEntity.ok(business);
    }


    @GetMapping()
    public ResponseEntity<List<Business>> getAllBusinesses() {

        List<Business> businesses = businessService.getAllBusiness();


        return ResponseEntity.ok(businesses);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Business> findBusinessById(
            @PathVariable Long id) throws BusinessException {

        Business business = businessService.findBusinessById(id);
        return ResponseEntity.ok(business);

    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<BusinessDto> addToFavorite(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id) throws BusinessException, UserException {

        User user = userService.findUserProfileByJwt(jwt);
        BusinessDto business = businessService.addToFavorites(id, user);
        return ResponseEntity.ok(business);

    }




}
