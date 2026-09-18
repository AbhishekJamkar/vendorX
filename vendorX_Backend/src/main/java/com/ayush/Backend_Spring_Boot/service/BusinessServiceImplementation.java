package com.ayush.Backend_Spring_Boot.service;
import java.util.List;
import java.util.Optional;
import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.dto.BusinessDto;
import com.ayush.Backend_Spring_Boot.model.Address;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.repository.AddressRepository;
import com.ayush.Backend_Spring_Boot.repository.BusinessRepository;
import com.ayush.Backend_Spring_Boot.repository.UserRepository;
import com.ayush.Backend_Spring_Boot.request.CreateBusinessRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessServiceImplementation implements BusinessService {
    @Autowired
    private BusinessRepository businessRepository;
    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;


    @Override
    public Business createBusiness(CreateBusinessRequest req,User user) {
        Address address=new Address();
        address.setCity(req.getAddress().getCity());
        address.setCountry(req.getAddress().getCountry());
        address.setFullName(req.getAddress().getFullName());
        address.setPostalCode(req.getAddress().getPostalCode());
        address.setState(req.getAddress().getState());
        address.setStreetAddress(req.getAddress().getStreetAddress());
        Address savedAddress = addressRepository.save(address);

        Business business = new Business();

        business.setAddress(savedAddress);
        business.setContactInformation(req.getContactInformation());
        business.setBusinessType(req.getBusinessType());
        business.setDescription(req.getDescription());
        business.setImages(req.getImages());
        business.setName(req.getName());
        business.setOpeningHours(req.getOpeningHours());
        business.setRegistrationDate(req.getRegistrationDate());
        business.setOwner(user);
        Business savedBusiness = businessRepository.save(business);

        return savedBusiness;
    }

    @Override
    public Business updateBusiness(Long businessId, CreateBusinessRequest updatedReq)
            throws BusinessException {
        Business business = findBusinessById(businessId);
        if (business.getBusinessType() != null) {
            business.setBusinessType(updatedReq.getBusinessType());
        }
        if (business.getDescription() != null) {
            business.setDescription(updatedReq.getDescription());
        }
        return businessRepository.save(business);
    }

    @Override
    public Business findBusinessById(Long businessId) throws BusinessException {
        Optional<Business> business = businessRepository.findById(businessId);
        if (business.isPresent()) {
            return business.get();
        } else {
            throw new BusinessException("Business with id " + businessId + "not found");
        }
    }

    @Override
    public void deleteBusiness(Long businessId) throws BusinessException {
        Business business = findBusinessById(businessId);
        if (business != null) {
            businessRepository.delete(business);
            return;
        }
        throw new BusinessException("Business with id " + businessId + " Not found");

    }

    @Override
    public List<Business> getAllBusiness() {
        return businessRepository.findAll();
    }


    @Override
    public Business getBusinessesByUserId(Long userId) throws BusinessException {
        Business businesses=businessRepository.findByOwnerId(userId);
        return businesses;
    }



    @Override
    public List<Business> searchBusiness(String keyword) {
        return businessRepository.findBySearchQuery(keyword);
    }

    @Override
    public BusinessDto addToFavorites(Long businessId,User user) throws BusinessException {
        Business business=findBusinessById(businessId);

        BusinessDto dto=new BusinessDto();
        dto.setTitle(business.getName());
        dto.setImages(business.getImages());
        dto.setId(business.getId());
        dto.setDescription(business.getDescription());

        boolean isFavorited = false;
        List<BusinessDto> favorites = user.getFavorites();
        for (BusinessDto favorite : favorites) {
            if (favorite.getId().equals(businessId)) {
                isFavorited = true;
                break;
            }
        }

        if (isFavorited) {
            favorites.removeIf(favorite -> favorite.getId().equals(businessId));
        } else {
            favorites.add(dto);
        }

        User updatedUser = userRepository.save(user);
        return dto;
    }

    @Override
    public Business updateBusinessStatus(Long id) throws BusinessException {
        Business business=findBusinessById(id);
        business.setOpen(!business.isOpen());
        return businessRepository.save(business);
    }

}
