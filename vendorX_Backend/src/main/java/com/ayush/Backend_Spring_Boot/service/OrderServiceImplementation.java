package com.ayush.Backend_Spring_Boot.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stripe.exception.StripeException;
import com.ayush.Backend_Spring_Boot.Exception.CartException;
import com.ayush.Backend_Spring_Boot.Exception.OrderException;
import com.ayush.Backend_Spring_Boot.Exception.BusinessException;
import com.ayush.Backend_Spring_Boot.Exception.UserException;
import com.ayush.Backend_Spring_Boot.model.Address;
import com.ayush.Backend_Spring_Boot.model.Cart;
import com.ayush.Backend_Spring_Boot.model.CartItem;
import com.ayush.Backend_Spring_Boot.model.Notification;
import com.ayush.Backend_Spring_Boot.model.Order;
import com.ayush.Backend_Spring_Boot.model.OrderItem;
import com.ayush.Backend_Spring_Boot.model.PaymentResponse;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.repository.AddressRepository;
import com.ayush.Backend_Spring_Boot.repository.OrderItemRepository;
import com.ayush.Backend_Spring_Boot.repository.OrderRepository;
import com.ayush.Backend_Spring_Boot.repository.BusinessRepository;
import com.ayush.Backend_Spring_Boot.repository.UserRepository;
import com.ayush.Backend_Spring_Boot.request.CreateOrderRequest;
@Service
public class OrderServiceImplementation implements OrderService {

    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private CartSerive cartService;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PaymentService paymentSerive;

    @Autowired
    private NotificationService notificationService;




    @Override
    public PaymentResponse createOrder(CreateOrderRequest order,User user) throws UserException, BusinessException, CartException, StripeException {

        String fulfillmentMethod = order.getFulfillmentMethod() == null ? "DELIVERY" : order.getFulfillmentMethod().toUpperCase();
        String paymentMethod = order.getPaymentMethod() == null ? "ONLINE" : order.getPaymentMethod().toUpperCase();
        if (!fulfillmentMethod.equals("DELIVERY") && !fulfillmentMethod.equals("PICKUP")) {
            throw new CartException("Fulfillment method must be DELIVERY or PICKUP");
        }
        if (!paymentMethod.equals("ONLINE") && !paymentMethod.equals("COD")) {
            throw new CartException("Payment method must be ONLINE or COD");
        }

        Address savedAddress = null;
        if (fulfillmentMethod.equals("DELIVERY")) {
            if (order.getDeliveryAddress() == null) {
                throw new CartException("A delivery address is required for delivery orders");
            }
            savedAddress = addressRepository.save(order.getDeliveryAddress());
            if (!user.getAddresses().contains(savedAddress)) {
                user.getAddresses().add(savedAddress);
                userRepository.save(user);
            }
        }

        Optional<Business> business = businessRepository.findById(order.getBusinessId());
        if(business.isEmpty()) {
            throw new BusinessException("Business not found with id "+order.getBusinessId());
        }

        Order createdOrder = new Order();

        createdOrder.setCustomer(user);
        createdOrder.setDeliveryAddress(savedAddress);
        createdOrder.setCreatedAt(new Date());
        createdOrder.setOrderStatus("PENDING");
        createdOrder.setBusiness(business.get());
        createdOrder.setFulfillmentMethod(fulfillmentMethod);
        createdOrder.setPaymentMethod(paymentMethod);

        Cart cart = cartService.findCartByUserId(user.getId());

        List<OrderItem> orderItems = new ArrayList<>();

        for (CartItem cartItem : cart.getItems()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setProduct(cartItem.getProduct());
            orderItem.setIngredients(cartItem.getIngredients());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setTotalPrice(cartItem.getProduct().getPrice()* cartItem.getQuantity());

            OrderItem savedOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }

        Long totalPrice = cartService.calculateCartTotals(cart);

        createdOrder.setTotalAmount(totalPrice);
        createdOrder.setBusiness(business.get());

        createdOrder.setItems(orderItems);
        Order savedOrder = orderRepository.save(createdOrder);

        business.get().getOrders().add(savedOrder);

        businessRepository.save(business.get());



        if (paymentMethod.equals("COD")) {
            PaymentResponse response = new PaymentResponse();
            response.setOrderId(savedOrder.getId());
            response.setPaymentMethod("COD");
            response.setMessage(fulfillmentMethod.equals("PICKUP")
                    ? "Order placed. Show this order ID at the business and pay by cash on collection."
                    : "Order placed. Pay cash when your order is delivered.");
            return response;
        }

        PaymentResponse response = paymentSerive.generatePaymentLink(savedOrder);
        response.setOrderId(savedOrder.getId());
        response.setPaymentMethod("ONLINE");
        return response;

    }

    @Override
    public void cancelOrder(Long orderId) throws OrderException {
        Order order =findOrderById(orderId);
        if(order==null) {
            throw new OrderException("Order not found with the id "+orderId);
        }

        orderRepository.deleteById(orderId);

    }

    public Order findOrderById(Long orderId) throws OrderException {
        Optional<Order> order = orderRepository.findById(orderId);
        if(order.isPresent()) return order.get();

        throw new OrderException("Order not found with the id "+orderId);
    }

    @Override
    public List<Order> getUserOrders(Long userId) throws OrderException {
        List<Order> orders=orderRepository.findAllUserOrders(userId);
        return orders;
    }

    @Override
    public List<Order> getOrdersOfBusiness(Long businessId,String orderStatus) throws OrderException, BusinessException {

        List<Order> orders = orderRepository.findOrdersByBusinessId(businessId);

        if(orderStatus!=null) {
            orders = orders.stream()
                    .filter(order->order.getOrderStatus().equals(orderStatus))
                    .collect(Collectors.toList());
        }

        return orders;
    }
//    private List<CatalogItem> filterByVegetarian(List<CatalogItem> catalogItems, boolean isVegetarian) {
//    return catalogItems.stream()
//            .filter(catalogItem -> catalogItem.isVegetarian() == isVegetarian)
//            .collect(Collectors.toList());
//}



    @Override
    public Order updateOrder(Long orderId, String orderStatus) throws OrderException {
        Order order=findOrderById(orderId);

        System.out.println("--------- "+orderStatus);

        if(orderStatus.equals("OUT_FOR_DELIVERY") || orderStatus.equals("DELIVERED")
                || orderStatus.equals("COMPLETED") || orderStatus.equals("PENDING")) {
            order.setOrderStatus(orderStatus);
            Notification notification=notificationService.sendOrderStatusNotification(order);
            return orderRepository.save(order);
        }
        else throw new OrderException("Please Select A Valid Order Status");


    }



}
