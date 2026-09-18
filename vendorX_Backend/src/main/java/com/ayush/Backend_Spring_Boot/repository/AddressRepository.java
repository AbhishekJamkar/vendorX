package com.ayush.Backend_Spring_Boot.repository;

import com.ayush.Backend_Spring_Boot.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
public interface AddressRepository extends JpaRepository<Address, Long> {

}
