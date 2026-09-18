package com.ayush.Backend_Spring_Boot.controller;


import java.util.List;

import com.ayush.Backend_Spring_Boot.Exception.UserException;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.Category;
import com.ayush.Backend_Spring_Boot.service.CategoryService;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    public CategoryService categoryService;

    @Autowired
    public UserService userService;

    @PostMapping("/admin/category")
    public ResponseEntity<Category> createdCategory(
            @RequestHeader("Authorization")String jwt,
            @RequestBody Category category) throws BusinessException, UserException {
        User user=userService.findUserProfileByJwt(jwt);

        Category createdCategory=categoryService.createCategory(category.getName(), user.getId());
        return new ResponseEntity<Category>(createdCategory,HttpStatus.OK);
    }

    @GetMapping("/category/business/{id}")
    public ResponseEntity<List<Category>> getBusinessesCategory(
            @PathVariable Long id,
            @RequestHeader("Authorization")String jwt) throws BusinessException, UserException {
        User user=userService.findUserProfileByJwt(jwt);
        List<Category> categories=categoryService.findCategoryByBusinessId(id);
        return new ResponseEntity<>(categories,HttpStatus.OK);
    }

}
