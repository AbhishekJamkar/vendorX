package com.ayush.Backend_Spring_Boot.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.IngredientCategory;
import com.ayush.Backend_Spring_Boot.model.IngredientsItem;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.repository.IngredientsCategoryRepository;
import com.ayush.Backend_Spring_Boot.repository.IngredientsItemRepository;

@Service
public class IngredientsServiceImplementation implements IngredientsService {

    @Autowired
    private IngredientsCategoryRepository ingredientsCategoryRepo;

    @Autowired
    private IngredientsItemRepository ingredientsItemRepository;



    @Autowired
    private BusinessService businessService;

    @Override
    public IngredientCategory createIngredientsCategory(
            String name,Long businessId) throws BusinessException {

        IngredientCategory isExist=ingredientsCategoryRepo
                .findByBusinessIdAndNameIgnoreCase(businessId,name);

        if(isExist!=null) {
            return isExist;
        }

        Business business=businessService.findBusinessById(businessId);

        IngredientCategory ingredientCategory=new IngredientCategory();
        ingredientCategory.setBusiness(business);
        ingredientCategory.setName(name);

        IngredientCategory createdCategory = ingredientsCategoryRepo.save(ingredientCategory);

        return createdCategory;
    }

    @Override
    public IngredientCategory findIngredientsCategoryById(Long id) throws Exception {
        Optional<IngredientCategory> opt=ingredientsCategoryRepo.findById(id);
        if(opt.isEmpty()){
            throw new Exception("ingredient category not found");
        }
        return opt.get();
    }

    @Override
    public List<IngredientCategory> findIngredientsCategoryByBusinessId(Long id) throws Exception {
        return ingredientsCategoryRepo.findByBusinessId(id);
    }

    @Override
    public List<IngredientsItem> findBusinessesIngredients(Long businessId) {

        return ingredientsItemRepository.findByBusinessId(businessId);
    }


    @Override
    public IngredientsItem createIngredientsItem(Long businessId,
                                                 String ingredientName, Long ingredientCategoryId) throws Exception {

        IngredientCategory category = findIngredientsCategoryById(ingredientCategoryId);

        IngredientsItem isExist = ingredientsItemRepository.
                findByBusinessIdAndNameIngoreCase(businessId, ingredientName,category.getName());
        if(isExist!=null) {
            System.out.println("is exists-------- item");
            return isExist;
        }

        Business business=businessService.findBusinessById(
                businessId);
        IngredientsItem item=new IngredientsItem();
        item.setName(ingredientName);
        item.setBusiness(business);
        item.setCategory(category);

        IngredientsItem savedIngredients = ingredientsItemRepository.save(item);
        category.getIngredients().add(savedIngredients);

        return savedIngredients;
    }


    @Override
    public IngredientsItem updateStoke(Long id) throws Exception {
        Optional<IngredientsItem> item=ingredientsItemRepository.findById(id);
        if(item.isEmpty()) {
            throw new Exception("ingredient not found with id "+item);
        }
        IngredientsItem ingredient=item.get();
        ingredient.setInStoke(!ingredient.isInStoke());
        return ingredientsItemRepository.save(ingredient);
    }





}
