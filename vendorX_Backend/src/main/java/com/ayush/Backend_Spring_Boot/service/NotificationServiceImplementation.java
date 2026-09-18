package com.ayush.Backend_Spring_Boot.service;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.Backend_Spring_Boot.model.Notification;
import com.ayush.Backend_Spring_Boot.model.Order;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.repository.NotificationRepository;

@Service
public class NotificationServiceImplementation implements NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public Notification sendOrderStatusNotification(Order order) {
        Notification notification = new Notification();
        notification.setMessage("your order is "+order.getOrderStatus()+ " order id is - "+order.getId());
        notification.setCustomer(order.getCustomer());
        notification.setSentAt(new Date());

        return notificationRepository.save(notification);
    }

    @Override
    public void sendBusinessNotification(Business business, String message) {
        // TODO Auto-generated method stub

    }

    @Override
    public void sendPromotionalNotification(User user, String message) {
        // TODO Auto-generated method stub

    }

    @Override
    public List<Notification> findUsersNotification(Long userId) {
        // TODO Auto-generated method stub
        return notificationRepository.findByCustomerId(userId);
    }

}
