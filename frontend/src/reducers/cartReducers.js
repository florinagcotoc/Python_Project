import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../constants/types'


export const cartReducers = (state = {cartItems:[]}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            // check if the product exist
            const item = action.payload
            const existItem = state.cartItems.find(p => p.product === item.product)
            if (existItem) {
                // map through the state, and loop through this array and find if the cart item matches the new item here
                // if it matches replace the matching item with the new item
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
        default:
            return state
    }
}

// check if the product that we send back inside of action payload exists inside of our cart items array
