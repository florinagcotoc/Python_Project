import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
    
} from '../constants/types';
import axios from 'axios';

export const addToCart = (id, qty) => async(dispatch, getState) => {   
    // getState let us get any part of the state
    // API call to get some product data
    const {data} = await axios.get(`http://127.0.0.1:8000/api/produs/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        // update the state with the product data
        payload:{
            product:data.id,
            product_name:data.product_name,
            image:data.image,
            price:data.price,
            stock:data.stock,
            qty
        }
    })

    // use localStorage to have the items in the cart even if you will refresh the page or you don't have an account
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,

    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,

    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,

    })
    localStorage.setItem('paymentMethod', JSON.stringify(data))

}