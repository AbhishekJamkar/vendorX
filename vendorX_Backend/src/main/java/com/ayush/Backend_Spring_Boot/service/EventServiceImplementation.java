package com.ayush.Backend_Spring_Boot.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.Events;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.repository.EventRepository;

@Service
public class EventServiceImplementation implements EventsService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private BusinessService businessService;

    @Override
    public Events createEvent(Events event,Long businessId) throws BusinessException {
        Business business=businessService.findBusinessById(businessId);

        Events createdEvent=new Events();
        createdEvent.setBusiness(business);
        createdEvent.setImage(event.getImage());
        createdEvent.setStartedAt(event.getStartedAt());
        createdEvent.setEndsAt(event.getEndsAt());
        createdEvent.setLocation(event.getLocation());
        createdEvent.setName(event.getName());

        return eventRepository.save(createdEvent);
    }

    @Override
    public List<Events> findAllEvent() {
        // TODO Auto-generated method stub
        return eventRepository.findAll();
    }

    @Override
    public List<Events> findBusinessesEvent(Long id) {
        // TODO Auto-generated method stub
        return eventRepository.findEventsByBusinessId(id);
    }

    @Override
    public void deleteEvent(Long id) throws Exception {
        Events event=findById(id);
        eventRepository.delete(event);

    }

    @Override
    public Events findById(Long id) throws Exception {
        Optional<Events> opt=eventRepository.findById(id);
        if(opt.isPresent()) {
            return opt.get();
        }
        throw new Exception("event not found withy id "+id);

    }

}
