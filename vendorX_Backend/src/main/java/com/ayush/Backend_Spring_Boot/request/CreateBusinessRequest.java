package com.ayush.Backend_Spring_Boot.request;

import java.time.LocalDateTime;
import java.util.List;
import com.ayush.Backend_Spring_Boot.model.Address;
import com.ayush.Backend_Spring_Boot.model.ContactInformation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateBusinessRequest {
    private Long id;
    private String name;
    private String description;
    private String businessType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;
    private LocalDateTime registrationDate;
}
