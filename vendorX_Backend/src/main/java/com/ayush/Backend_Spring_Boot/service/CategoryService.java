package com.ayush.Backend_Spring_Boot.service;
import java.util.List;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.Category;

public interface CategoryService {

    public Category createCategory (String name,Long userId) throws BusinessException;
    public List<Category> findCategoryByBusinessId(Long businessId) throws BusinessException;
    public Category findCategoryById(Long id) throws BusinessException;

}
