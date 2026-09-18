package com.ayush.Backend_Spring_Boot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.Category;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.repository.CategoryRepository;

@Service
public class CategoryServiceImplementation implements CategoryService {

    @Autowired
    private BusinessService businessService;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(String name,Long userId) throws BusinessException {
        Business business=businessService.getBusinessesByUserId(userId);
        Category createdCategory=new Category();

        createdCategory.setName(name);
        createdCategory.setBusiness(business);
        return categoryRepository.save(createdCategory);
    }

    @Override
    public List<Category> findCategoryByBusinessId(Long id) throws BusinessException {
        Business business=businessService.findBusinessById(id);
        return categoryRepository.findByBusinessId(id);
    }

    @Override
    public Category findCategoryById(Long id) throws BusinessException {
        Optional<Category> opt=categoryRepository.findById(id);

        if(opt.isEmpty()) {
            throw new BusinessException("category not exist with id "+id);
        }

        return opt.get();
    }

}

