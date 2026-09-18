package com.ayush.Backend_Spring_Boot.controller;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.Exception.UserException;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.request.CreateBusinessRequest;
import com.ayush.Backend_Spring_Boot.response.ApiResponse;
import com.ayush.Backend_Spring_Boot.service.BusinessService;
import com.ayush.Backend_Spring_Boot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/businesses")
public class AdminBusinessController {
    @Autowired
    private BusinessService businessService;

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<Business> createBusiness(
            @RequestBody CreateBusinessRequest req,
            @RequestHeader("Authorization") String jwt) throws UserException {

        User user = userService.findUserProfileByJwt(jwt);

        System.out.println("----TRUE___-----"+jwt);
        Business business = businessService.createBusiness(req,user);
        return ResponseEntity.ok(business);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Business> updateBusiness(@PathVariable Long id, @RequestBody CreateBusinessRequest req,
                                                       @RequestHeader("Authorization") String jwt) throws BusinessException, UserException {
        User user = userService.findUserProfileByJwt(jwt);

        Business business = businessService.updateBusiness(id, req);
        return ResponseEntity.ok(business);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteBusinessById(@PathVariable("id") Long businessId,
                                                            @RequestHeader("Authorization") String jwt) throws BusinessException, UserException {
        User user = userService.findUserProfileByJwt(jwt);

        businessService.deleteBusiness(businessId);

        ApiResponse res=new ApiResponse("Business Deleted with id Successfully",true);
        return ResponseEntity.ok(res);
    }


    @PutMapping("/{id}/status")
    public ResponseEntity<Business> updateStataurantStatus(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id) throws BusinessException, UserException {

        Business business = businessService.updateBusinessStatus(id);
        return ResponseEntity.ok(business);

    }

    @GetMapping("/user")
    public ResponseEntity<Business> findBusinessByUserId(
            @RequestHeader("Authorization") String jwt) throws BusinessException, UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Business business = businessService.getBusinessesByUserId(user.getId());
        return ResponseEntity.ok(business);

    }



}
