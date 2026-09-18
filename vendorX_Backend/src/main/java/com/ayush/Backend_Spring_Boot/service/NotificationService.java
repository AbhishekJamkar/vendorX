package com.ayush.Backend_Spring_Boot.service;

import java.util.List;

import com.ayush.Backend_Spring_Boot.model.Notification;
import com.ayush.Backend_Spring_Boot.model.Order;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.model.User;

public interface NotificationService {

    public Notification sendOrderStatusNotification(Order order);
    public void sendBusinessNotification(Business business, String message);
    public void sendPromotionalNotification(User user, String message);

    public List<Notification> findUsersNotification(Long userId);

}
