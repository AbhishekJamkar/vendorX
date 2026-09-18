package com.ayush.Backend_Spring_Boot.service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.Backend_Spring_Boot.Exception.ReviewException;
import com.ayush.Backend_Spring_Boot.model.Business;
import com.ayush.Backend_Spring_Boot.model.Review;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.repository.BusinessRepository;
import com.ayush.Backend_Spring_Boot.repository.ReviewRepository;
import com.ayush.Backend_Spring_Boot.request.ReviewRequest;
@Service
public class ReviewServiceImplementation implements ReviewSerive {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private BusinessRepository businessRepository;

    @Override
    public Review submitReview(ReviewRequest reviewRequest, User user) {
        Review review = new Review();
        System.out.println(reviewRequest);

        System.out.println(reviewRequest.getBusinessId());
        Optional<Business> business = businessRepository.findById(reviewRequest.getBusinessId());
        if(business.isPresent()) {
            review.setBusiness(business.get());
        }
        review.setCustomer(user);
        review.setMessage(reviewRequest.getReviewText());
        review.setRating(reviewRequest.getRating());
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);
    }


    @Override
    public void deleteReview(Long reviewId) throws ReviewException {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);

        if (optionalReview.isPresent()) {
            reviewRepository.deleteById(reviewId);
        } else {
            throw new ReviewException("Review with ID " + reviewId + " not found");
        }
    }

    @Override
    public double calculateAverageRating(List<Review> reviews) {
        double totalRating = 0;

        for (Review review : reviews) {
            totalRating += review.getRating();
        }

        if (reviews.size() > 0) {
            return totalRating / reviews.size();
        } else {
            return 0;
        }
    }
}

