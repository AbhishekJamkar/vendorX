// Reducers.js
import * as actionTypes from "./ActionTypes";

const initialState = {
  businesses: [],
  usersBusiness: null,
  business: null,
  loading: false,
  error: null,
  events: [],
  businessesEvents: [],
  categories: [],
};

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BUSINESS_REQUEST:
    case actionTypes.GET_ALL_BUSINESSS_REQUEST:
    case actionTypes.DELETE_BUSINESS_REQUEST:
    case actionTypes.UPDATE_BUSINESS_REQUEST:
    case actionTypes.GET_BUSINESS_BY_ID_REQUEST:
    case actionTypes.CREATE_CATEGORY_REQUEST:
    case actionTypes.GET_BUSINESSS_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.CREATE_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersBusiness:action.payload
      };
    case actionTypes.GET_ALL_BUSINESSS_SUCCESS:
      return {
        ...state,
        loading: false,
        businesses: action.payload,
      };
    case actionTypes.GET_BUSINESS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        business: action.payload,
      };
    case actionTypes.GET_BUSINESS_BY_USER_ID_SUCCESS:
    case actionTypes.UPDATE_BUSINESS_STATUS_SUCCESS:
    case actionTypes.UPDATE_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersBusiness: action.payload,
      };

    case actionTypes.DELETE_BUSINESS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        businesses: state.businesses.filter(
          (item) => item.id !== action.payload
        ),
        usersBusiness: state.usersBusiness.filter(
          (item) => item.id !== action.payload
        ),
      };

    case actionTypes.CREATE_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: [...state.events, action.payload],
        businessesEvents: [...state.businessesEvents, action.payload],
      };
    case actionTypes.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    case actionTypes.GET_RESTAIRANTS_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        businessesEvents: action.payload,
      };
    case actionTypes.DELETE_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: state.events.filter((item) => item.id !== action.payload),
        businessesEvents: state.businessesEvents.filter(
          (item) => item.id !== action.payload
        ),
      };
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    case actionTypes.GET_BUSINESSS_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case actionTypes.CREATE_BUSINESS_FAILURE:
    case actionTypes.GET_ALL_BUSINESSS_FAILURE:
    case actionTypes.DELETE_BUSINESS_FAILURE:
    case actionTypes.UPDATE_BUSINESS_FAILURE:
    case actionTypes.GET_BUSINESS_BY_ID_FAILURE:
    case actionTypes.CREATE_EVENTS_FAILURE:
    case actionTypes.CREATE_CATEGORY_FAILURE:
    case actionTypes.GET_BUSINESSS_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default businessReducer;
