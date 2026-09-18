package com.ayush.Backend_Spring_Boot.service;

import com.ayush.Backend_Spring_Boot.Exception.UserException;
import com.ayush.Backend_Spring_Boot.model.User;
import java.util.List;

public interface UserService {

    public User findUserProfileByJwt(String jwt) throws UserException;

    public User findUserByEmail(String email) throws UserException;

    public List<User> findAllUsers();

    public List<User> getPenddingBusinessOwner();

    void updatePassword(User user, String newPassword);

    void sendPasswordResetEmail(User user);

}
