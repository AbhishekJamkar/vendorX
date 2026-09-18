package com.ayush.Backend_Spring_Boot.service;

import java.util.List;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.Events;

public interface EventsService {

    public Events createEvent(Events event,Long businessId) throws BusinessException;

    public List<Events> findAllEvent();

    public List<Events> findBusinessesEvent(Long id);

    public void deleteEvent(Long id) throws Exception;

    public Events findById(Long id) throws Exception;

}
