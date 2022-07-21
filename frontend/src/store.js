// import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;


import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { productListReducer } from './reducers/productReducers';
import { productDetailsReducer } from './reducers/productDetailsReducers';
import { productsByCategoryReducers} from './reducers/productsByCategoryReducers';
import {cartReducers} from './reducers/cartReducers';
import { userDetailsReducer, userUpdateProfileReducer } from './reducers/usersReducers';
import {loginReducer, registerReducer, } from './reducers/auth';

const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    productsCategoryList : productsByCategoryReducers,
    cart: cartReducers,
    userLogin: loginReducer,
    userRegister : registerReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

// pull the data from the localStorage, parse the data and turn it back into a JavaScript object and load it into initialState
const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? 
        JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? 
        JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart : {cartItems : cartItemsFromLocalStorage },
    userLogin : { userInfo: userInfoFromLocalStorage}
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;