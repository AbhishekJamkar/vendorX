// Actions.js

import { api } from "../../../config/api";
import {
  createBusinessFailure,
  createBusinessRequest,
  createBusinessSuccess,
  deleteBusinessFailure,
  deleteBusinessRequest,
  deleteBusinessSuccess,
  getAllBusinessesFailure,
  getAllBusinessesRequest,
  getAllBusinessesSuccess,
  getBusinessByIdFailure,
  getBusinessByIdRequest,
  getBusinessByIdSuccess,
  updateBusinessFailure,
  updateBusinessRequest,
  updateBusinessSuccess,
} from "./ActionCreateros";

import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_EVENTS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_RESTAIRANTS_EVENTS_FAILURE,
  GET_RESTAIRANTS_EVENTS_REQUEST,
  GET_RESTAIRANTS_EVENTS_SUCCESS,
  GET_BUSINESSS_CATEGORY_FAILURE,
  GET_BUSINESSS_CATEGORY_REQUEST,
  GET_BUSINESSS_CATEGORY_SUCCESS,
  GET_BUSINESS_BY_USER_ID_FAILURE,
  GET_BUSINESS_BY_USER_ID_REQUEST,
  GET_BUSINESS_BY_USER_ID_SUCCESS,
  UPDATE_BUSINESS_STATUS_FAILURE,
  UPDATE_BUSINESS_STATUS_REQUEST,
  UPDATE_BUSINESS_STATUS_SUCCESS,
} from "./ActionTypes";

export const getAllBusinessesAction = (token) => {
  return async (dispatch) => {
    dispatch(getAllBusinessesRequest());
    try {
      const { data } = await api.get("/api/businesses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getAllBusinessesSuccess(data));
      console.log("all business ", data);
    } catch (error) {
      dispatch(getAllBusinessesFailure(error));
    }
  };
};

export const getBusinessById = (reqData) => {
  return async (dispatch) => {
    dispatch(getBusinessByIdRequest());
    try {
      const response = await api.get(`api/businesses/${reqData.businessId}`, {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      dispatch(getBusinessByIdSuccess(response.data));
    } catch (error) {
      console.log("error",error)
      dispatch(getBusinessByIdFailure(error));
    }
  };
};

export const getBusinessByUserId = (jwt) => {
  return async (dispatch) => {
    dispatch({ type: GET_BUSINESS_BY_USER_ID_REQUEST });
    try {
      const { data } = await api.get(`/api/admin/businesses/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get business by user id ", data);
      dispatch({ type: GET_BUSINESS_BY_USER_ID_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({
        type: GET_BUSINESS_BY_USER_ID_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const createBusiness = (reqData) => {
  console.log("token-----------", reqData.token);
  return async (dispatch) => {
    dispatch(createBusinessRequest());
    try {
      const { data } = await api.post(`/api/admin/businesses`, reqData.data, {
        headers: {
          Authorization: `Bearer ${reqData.token}`,
        },
      });
      dispatch(createBusinessSuccess(data));
      console.log("created business ", data);
    } catch (error) {
      console.log("catch error ", error);
      dispatch(createBusinessFailure(error));
    }
  };
};

export const updateBusiness = ({ businessId, businessData, jwt }) => {
  return async (dispatch) => {
    dispatch(updateBusinessRequest());

    try {
      const res = await api.put(
        `api/admin/business/${businessId}`,
        businessData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch(updateBusinessSuccess(res.data));
    } catch (error) {
      dispatch(updateBusinessFailure(error));
    }
  };
};
export const deleteBusiness = ({ businessId, jwt }) => {
  return async (dispatch) => {
    dispatch(deleteBusinessRequest());

    try {
      const res = await api.delete(`/api/admin/business/${businessId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("delete business ", res.data);
      dispatch(deleteBusinessSuccess(businessId));
    } catch (error) {
      console.log("catch error ", error);
      dispatch(deleteBusinessFailure(error));
    }
  };
};

export const updateBusinessStatus = ({ businessId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_BUSINESS_STATUS_REQUEST });

    try {
      const res = await api.put(
        `api/admin/businesses/${businessId}/status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("ressssss ", res.data);
      dispatch({ type: UPDATE_BUSINESS_STATUS_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("error ",error)
      dispatch({ type: UPDATE_BUSINESS_STATUS_FAILURE, payload: error });
    }
  };
};

export const createEventAction = ({ data, jwt,businessId }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });

    try {
      const res = await api.post(
        `api/admin/events/business/${businessId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("create events ", res.data);
      dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("catch - ", error);
      dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getAllEvents = ({ jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });

    try {
      const res = await api.get(`api/events`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get all events ", res.data);
      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
    }
  };
};

export const deleteEventAction = ({ eventId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });

    try {
      const res = await api.delete(`api/admin/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("DELETE events ", res.data);
      dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId });
    } catch (error) {
      console.log("catch - ", error);
      dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
    }
  };
};

export const getRestaurnatsEvents = ({ businessId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAIRANTS_EVENTS_REQUEST });

    try {
      const res = await api.get(
        `/api/admin/events/business/${businessId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log("get businesses event ", res.data);
      dispatch({ type: GET_RESTAIRANTS_EVENTS_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_RESTAIRANTS_EVENTS_FAILURE, payload: error });
    }
  };
};

export const createCategoryAction = ({ reqData, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });

    try {
      const res = await api.post(`api/admin/category`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("create category ", res.data);
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data });
    } catch (error) {
      console.log("catch - ", error);
      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
    }
  };
};

export const getBusinessesCategory = ({ jwt,businessId }) => {
  return async (dispatch) => {
    dispatch({ type: GET_BUSINESSS_CATEGORY_REQUEST });
    try {
      const res = await api.get(`/api/category/business/${businessId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("get businesses category ", res.data);
      dispatch({ type: GET_BUSINESSS_CATEGORY_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_BUSINESSS_CATEGORY_FAILURE, payload: error });
    }
  };
};
