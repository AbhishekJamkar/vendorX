package com.ayush.Backend_Spring_Boot.request;

import java.util.List;
import com.ayush.Backend_Spring_Boot.model.Category;
import com.ayush.Backend_Spring_Boot.model.IngredientsItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateProductRequest {
    private String name;
    private String description;
    private Long price;
    private Category category;
    private List<String> images;
    private Long businessId;
    private boolean vegetarian;
    private boolean seasonal;
    private List<IngredientsItem> ingredients;
}