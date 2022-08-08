import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
} from '../constants/types'


export const cartReducers = (state = {cartItems:[], shippingAddress: {} }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            // check if the product exist
            const item = action.payload
            const existItem = state.cartItems.find(p => p.product === item.product)
            if (existItem) {
                // find if the cart item matches the new item here, if it is True replace the matching item with the new item
                return {
                     ...state, cartItems:state.cartItems.map(p =>
                        p.product === existItem.product ? item : p)
                }
            }else {
                // return the original cart
                return {
                    ...state, cartItems:[...state.cartItems,item]
                }
            }
        case CART_REMOVE_ITEM:
            // action.payload is the ID of the product that we want to remove
            return {
                ...state, cartItems: state.cartItems.filter(p => p.product !== action.payload)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }
        default:
            return state
    }
}
