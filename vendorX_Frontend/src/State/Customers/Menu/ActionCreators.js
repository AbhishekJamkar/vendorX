import * as actionTypes from './ActionType';

// Delete Menu Item Actions
export const deleteMenuItemRequest = () => ({
    type: actionTypes.DELETE_MENU_ITEM_REQUEST,
  });
  
  export const deleteMenuItemSuccess = (menuItemId) => ({
    type: actionTypes.DELETE_MENU_ITEM_SUCCESS,
    payload: menuItemId,
  });
  
  export const deleteMenuItemFailure = (error) => ({
    type: actionTypes.DELETE_MENU_ITEM_FAILURE,
    payload: error,
  });

  // Get Menu Items by Business ID Actions
export const getMenuItemsByBusinessIdRequest = () => ({
    type: actionTypes.GET_MENU_ITEMS_BY_BUSINESS_ID_REQUEST,
  });
  
  export const getMenuItemsByBusinessIdSuccess = (menuItems) => ({
    type: actionTypes.GET_MENU_ITEMS_BY_BUSINESS_ID_SUCCESS,
    payload: menuItems,
  });
  
  export const getMenuItemsByBusinessIdFailure = (error) => ({
    type: actionTypes.GET_MENU_ITEMS_BY_BUSINESS_ID_FAILURE,
    payload: error,
  });

  // Create Menu Item Actions
export const createMenuItemRequest = () => ({
    type: actionTypes.CREATE_MENU_ITEM_REQUEST,
  });
  
  export const createMenuItemSuccess = (menuItem) => ({
    type: actionTypes.CREATE_MENU_ITEM_SUCCESS,
    payload: menuItem,
  });
  
  export const createMenuItemFailure = (error) => ({
    type: actionTypes.CREATE_MENU_ITEM_FAILURE,
    payload: error,
  });