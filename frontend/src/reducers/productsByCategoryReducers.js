import {
    PRODUCTS_CATEGORY_REQUEST,
    PRODUCTS_CATEGORY_SUCCESS,
    PRODUCTS_CATEGORY_FAIL
} from '../constants/types'


export const productsByCategoryReducers = (state = {productsByCategory:[]}, action) => {
    switch(action.type) {
        case PRODUCTS_CATEGORY_REQUEST:
            return {loading:true, productsByCategory:[]}
        case PRODUCTS_CATEGORY_SUCCESS:
            return {loading:false, productsByCategory:action.payload}
        case PRODUCTS_CATEGORY_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}