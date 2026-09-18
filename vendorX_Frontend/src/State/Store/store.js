import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "../Authentication/Reducer";
import businessReducer from "../Customers/Business/Reducer";
import menuItemReducer from "../Customers/Menu/Reducer";
import cartReducer from "../Customers/Cart/Reducer";
import { orderReducer } from "../Customers/Orders/order.reducer";
import businessesOrderReducer from "../Admin/Order/businesses.order.reducer";
import superAdminReducer from "../SuperAdmin/superAdmin.reducer";
import { ingredientReducer } from "../Admin/Ingredients/Reducer";



const rootReducer=combineReducers({

    auth:authReducer,
    business:businessReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,

    // admin
    businessesOrder:businessesOrderReducer,
    ingredients:ingredientReducer,

    // super admin
    superAdmin:superAdminReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))