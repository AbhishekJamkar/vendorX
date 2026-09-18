package com.ayush.Backend_Spring_Boot.controller;

import java.util.List;

import com.ayush.Backend_Spring_Boot.request.CreateIngredientCategoryRequest;
import com.ayush.Backend_Spring_Boot.request.CreateIngredientRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ayush.Backend_Spring_Boot.model.IngredientCategory;
import com.ayush.Backend_Spring_Boot.model.IngredientsItem;
import com.ayush.Backend_Spring_Boot.service.IngredientsService;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientsController {

    @Autowired
    private IngredientsService ingredientService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientCategory(
            @RequestBody CreateIngredientCategoryRequest req) throws Exception{
        IngredientCategory items=ingredientService.createIngredientsCategory(req.getName(), req.getBusinessId());
        return new ResponseEntity<>(items,HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<IngredientsItem> createIngredient(
            @RequestBody CreateIngredientRequest req) throws Exception{

        IngredientsItem item=ingredientService.createIngredientsItem(req.getBusinessId(),req.getName(),req.getIngredientCategoryId());
        return new ResponseEntity<>(item,HttpStatus.OK);
    }

    @PutMapping("/{id}/stoke")
    public ResponseEntity<IngredientsItem> updateStoke(@PathVariable Long id) throws Exception{
        IngredientsItem item=ingredientService.updateStoke(id);
        return new ResponseEntity<IngredientsItem>(item,HttpStatus.OK);
    }

    @GetMapping("/business/{id}")
    public ResponseEntity<List<IngredientsItem>> businessesIngredient(
            @PathVariable Long id) throws Exception{
        List<IngredientsItem> items=ingredientService.findBusinessesIngredients(id);
        return new ResponseEntity<>(items,HttpStatus.OK);
    }

    @GetMapping("/business/{id}/category")
    public ResponseEntity<List<IngredientCategory>> businessesIngredientCategory(
            @PathVariable Long id) throws Exception{
        List<IngredientCategory> items=ingredientService.findIngredientsCategoryByBusinessId(id);
        return new ResponseEntity<>(items,HttpStatus.OK);
    }

}
