package com.ayush.Backend_Spring_Boot.controller;
import com.ayush.Backend_Spring_Boot.model.Order;
import com.ayush.Backend_Spring_Boot.model.PaymentResponse;
import com.ayush.Backend_Spring_Boot.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stripe.exception.StripeException;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

//	@PostMapping("/{orderId}/payment")
//	public ResponseEntity<PaymentResponse> generatePaymentLink(@PathVariable Long orderId)
//			throws StripeException{
//
//		PaymentResponse res = paymentService.generatePaymentLink(orderId);
//
//		return new ResponseEntity<PaymentResponse>(res,HttpStatus.ACCEPTED);
//	}

}








//
//@RestController
//@RequestMapping("/api")
//public class PaymentController {
//
//    @Autowired
//    private PaymentService paymentService;
//
//    @PostMapping("/payment")
//    public ResponseEntity<PaymentResponse> generatePaymentLink(@RequestBody Order order) throws StripeException {
//        PaymentResponse res = paymentService.generatePaymentLink(order);
//        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
//    }
//
//
//}
