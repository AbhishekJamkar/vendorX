package com.ayush.Backend_Spring_Boot.service;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.dto.BusinessDto;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.request.CreateBusinessRequest;
import java.util.List;

public interface BusinessService {

    public Business createBusiness(CreateBusinessRequest req,User user);

    public Business updateBusiness(Long businessId, CreateBusinessRequest updatedBusiness)
            throws BusinessException;

    public void deleteBusiness(Long businessId) throws BusinessException;

    public List<Business>getAllBusiness();

    public List<Business>searchBusiness(String keyword);

    public Business findBusinessById(Long id) throws BusinessException;

    public Business getBusinessesByUserId(Long userId) throws BusinessException;

    public BusinessDto addToFavorites(Long businessId,User user) throws BusinessException;

    public Business updateBusinessStatus(Long id)throws BusinessException;
}
