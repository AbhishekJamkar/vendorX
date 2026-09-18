package com.ayush.Backend_Spring_Boot.service;

import java.util.List;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.IngredientCategory;
import com.ayush.Backend_Spring_Boot.model.IngredientsItem;
public interface IngredientsService {

    public IngredientCategory createIngredientsCategory(
            String name,Long businessId) throws BusinessException;

    public IngredientCategory findIngredientsCategoryById(Long id) throws Exception;

    public List<IngredientCategory> findIngredientsCategoryByBusinessId(Long id) throws Exception;

    public List<IngredientsItem> findBusinessesIngredients(
            Long businessId);


    public IngredientsItem createIngredientsItem(Long businessId,
                                                 String ingredientName,Long ingredientCategoryId) throws Exception;

    public IngredientsItem updateStoke(Long id) throws Exception;

}
