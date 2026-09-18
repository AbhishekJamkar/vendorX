import * as actionTypes from './ActionTypes';
// Create Business Actions
export const createBusinessRequest = () => ({
    type: actionTypes.CREATE_BUSINESS_REQUEST,
  });
  
  export const createBusinessSuccess = (business) => ({
    type: actionTypes.CREATE_BUSINESS_SUCCESS,
    payload: business,
  });
  
  export const createBusinessFailure = (error) => ({
    type: actionTypes.CREATE_BUSINESS_FAILURE,
    payload: error,
  });

  // Get All Businesses Actions (similar structure for other actions)
export const getAllBusinessesRequest = () => ({
    type: actionTypes.GET_ALL_BUSINESSS_REQUEST,
  });
  
  export const getAllBusinessesSuccess = (businesses) => ({
    type: actionTypes.GET_ALL_BUSINESSS_SUCCESS,
    payload: businesses,
  });
  
  export const getAllBusinessesFailure = (error) => ({
    type: actionTypes.GET_ALL_BUSINESSS_FAILURE,
    payload: error,
  });
  

  // Delete Business Actions
export const deleteBusinessRequest = () => ({
    type: actionTypes.DELETE_BUSINESS_REQUEST,
  });
  
  export const deleteBusinessSuccess = (businessId) => ({
    type: actionTypes.DELETE_BUSINESS_SUCCESS,
    payload: businessId,
  });
  
  export const deleteBusinessFailure = (error) => ({
    type: actionTypes.DELETE_BUSINESS_FAILURE,
    payload: error,
  });


  // Update Business Actions
export const updateBusinessRequest = () => ({
    type: actionTypes.UPDATE_BUSINESS_REQUEST,
  });
  
  export const updateBusinessSuccess = (updatedBusiness) => ({
    type: actionTypes.UPDATE_BUSINESS_SUCCESS,
    payload: updatedBusiness,
  });
  
  export const updateBusinessFailure = (error) => ({
    type: actionTypes.UPDATE_BUSINESS_FAILURE,
    payload: error,
  });

  export const getBusinessByIdRequest = () => ({
    type: actionTypes.GET_BUSINESS_BY_ID_REQUEST,
  });
  
  export const getBusinessByIdSuccess = (business) => ({
    type: actionTypes.GET_BUSINESS_BY_ID_SUCCESS,
    payload: business,
  });
  
  export const getBusinessByIdFailure = (error) => ({
    type: actionTypes.GET_BUSINESS_BY_ID_FAILURE,
    payload: error,
  });
  