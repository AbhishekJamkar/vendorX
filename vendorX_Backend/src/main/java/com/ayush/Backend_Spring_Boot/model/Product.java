package com.ayush.Backend_Spring_Boot.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Long price;

    @ManyToOne
    private Category productCategory;


    @ElementCollection
    @Column(length = 1000)
    private List<String> images;

    private boolean available;

    //    @JsonIgnore
    @ManyToOne
    private Business business;

    private boolean isVegetarian;
    private boolean isSeasonal;

    @ManyToMany
    private List<IngredientsItem> ingredients=new ArrayList<>();

    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;



}
