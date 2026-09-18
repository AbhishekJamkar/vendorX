package com.ayush.Backend_Spring_Boot.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.model.Events;
import com.ayush.Backend_Spring_Boot.response.ApiResponse;
import com.ayush.Backend_Spring_Boot.service.EventsService;

@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    public EventsService eventService;

    @PostMapping("/admin/events/business/{businessId}")
    public ResponseEntity<Events> createEvents(@RequestBody Events event,
                                               @PathVariable Long businessId) throws BusinessException{
        Events createdEvents=eventService.createEvent(event, businessId);
        return new ResponseEntity<>(createdEvents,HttpStatus.ACCEPTED);
    }

    @GetMapping("/events")
    public ResponseEntity<List<Events>> findAllEvents() throws BusinessException{
        List<Events> events=eventService.findAllEvent();
        return new ResponseEntity<>(events,HttpStatus.ACCEPTED);
    }

    @GetMapping("/admin/events/business/{businessId}")
    public ResponseEntity<List<Events>> findBusinessesEvents(
            @PathVariable Long businessId) throws BusinessException{
        List<Events> events=eventService.findBusinessesEvent(businessId);
        return new ResponseEntity<>(events,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/events/{id}")
    public ResponseEntity<ApiResponse> deleteEvents(
            @PathVariable Long id) throws Exception{
        eventService.deleteEvent(id);
        ApiResponse res=new ApiResponse("Events Deleted",true);
        return new ResponseEntity<>(res,HttpStatus.ACCEPTED);
    }

}
