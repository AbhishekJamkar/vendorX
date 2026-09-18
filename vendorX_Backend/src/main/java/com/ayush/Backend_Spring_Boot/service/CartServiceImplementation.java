package com.ayush.Backend_Spring_Boot.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ayush.Backend_Spring_Boot.Exception.CartException;
import com.ayush.Backend_Spring_Boot.Exception.CartItemException;
import com.ayush.Backend_Spring_Boot.Exception.ProductException;
import com.ayush.Backend_Spring_Boot.Exception.UserException;
import com.ayush.Backend_Spring_Boot.model.Cart;
import com.ayush.Backend_Spring_Boot.model.CartItem;
import com.ayush.Backend_Spring_Boot.model.Product;
import com.ayush.Backend_Spring_Boot.model.User;
import com.ayush.Backend_Spring_Boot.repository.CartItemRepository;
import com.ayush.Backend_Spring_Boot.repository.CartRepository;
import com.ayush.Backend_Spring_Boot.repository.ProductRepository;
import com.ayush.Backend_Spring_Boot.request.AddCartItemRequest;

@Service
public class CartServiceImplementation implements CartSerive {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private ProductRepository catalogItemRepository;

    @Override
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws UserException, ProductException, CartException, CartItemException {

        User user = userService.findUserProfileByJwt(jwt);

        Optional<Product> catalogItem=catalogItemRepository.findById(req.getCatalogItemId());
        if(catalogItem.isEmpty()) {
            throw new ProductException("Menu Item not exist with id "+req.getCatalogItemId());
        }

        Cart cart = findCartByUserId(user.getId());

        for (CartItem cartItem : cart.getItems()) {
            if (cartItem.getProduct().equals(catalogItem.get())) {

                int newQuantity = cartItem.getQuantity() + req.getQuantity();
                return updateCartItemQuantity(cartItem.getId(),newQuantity);
            }
        }

        CartItem newCartItem = new CartItem();
        newCartItem.setProduct(catalogItem.get());
        newCartItem.setQuantity(req.getQuantity());
        newCartItem.setCart(cart);
        newCartItem.setIngredients(req.getIngredients());
        newCartItem.setTotalPrice(req.getQuantity()*catalogItem.get().getPrice());

        CartItem savedItem=cartItemRepository.save(newCartItem);
        cart.getItems().add(savedItem);
        cartRepository.save(cart);

        return savedItem;

    }

    @Override
    public CartItem updateCartItemQuantity(Long cartItemId,int quantity) throws CartItemException {
        Optional<CartItem> cartItem=cartItemRepository.findById(cartItemId);
        if(cartItem.isEmpty()) {
            throw new CartItemException("cart item not exist with id "+cartItemId);
        }
        cartItem.get().setQuantity(quantity);
        cartItem.get().setTotalPrice((cartItem.get().getProduct().getPrice()*quantity));
        return cartItemRepository.save(cartItem.get());
    }

    @Override
    public Cart removeItemFromCart(Long cartItemId, String jwt) throws UserException,
            CartException, CartItemException {

        User user = userService.findUserProfileByJwt(jwt);

        Cart cart = findCartByUserId(user.getId());

        Optional<CartItem> cartItem=cartItemRepository.findById(cartItemId);

        if(cartItem.isEmpty()) {
            throw new CartItemException("cart item not exist with id "+cartItemId);
        }

        cart.getItems().remove(cartItem.get());
        return cartRepository.save(cart);
    }

    @Override
    public Long calculateCartTotals(Cart cart) throws UserException {

        Long total = 0L;
        for (CartItem cartItem : cart.getItems()) {
            total += cartItem.getProduct().getPrice() * cartItem.getQuantity();
        }
        return total;
    }

    @Override
    public Cart findCartById(Long id) throws CartException {
        Optional<Cart> cart = cartRepository.findById(id);
        if(cart.isPresent()) {
            return cart.get();
        }
        throw new CartException("Cart not found with the id "+id);
    }

    @Override
    public Cart findCartByUserId(Long userId) throws CartException, UserException {

        Optional<Cart> opt=cartRepository.findByCustomer_Id(userId);

        if(opt.isPresent()) {
            return opt.get();
        }
        throw new CartException("cart not found");

    }

    @Override
    public Cart clearCart(Long userId) throws CartException, UserException {
        Cart cart=findCartByUserId(userId);

        cart.getItems().clear();
        return cartRepository.save(cart);
    }



}
