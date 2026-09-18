package com.ayush.Backend_Spring_Boot.service;


import java.util.List;

import com.ayush.Backend_Spring_Boot.Exception.ReviewException;
import com.ayush.Backend_Spring_Boot.model.Review;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.request.ReviewRequest;

public interface ReviewSerive {

    public Review submitReview(ReviewRequest review,User user);
    public void deleteReview(Long reviewId) throws ReviewException;
    public double calculateAverageRating(List<Review> reviews);
}
