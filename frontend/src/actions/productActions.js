import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,

    PRODUCTS_CATEGORY_REQUEST,
    PRODUCTS_CATEGORY_SUCCESS,
    PRODUCTS_CATEGORY_FAIL,
} from '../constants/types';
import axios from 'axios';

// this function is going to be in charge of replacing the API call in ProductsScreen
export const listProducts = () => async (dispatch) => {
    try {
        dispatch({type:PRODUCT_LIST_REQUEST})

        const {data} =  await axios.get('http://127.0.0.1:8000/api/produse/')

        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/produs/${id}`)

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listProductsCategory = (category) => async (dispatch) => {
    try {
        dispatch({type:PRODUCTS_CATEGORY_REQUEST})

        const {data} =  await axios.get(`http://127.0.0.1:8000/api/produse/${category}/`)
        console.log(data)
        dispatch({
            type:PRODUCTS_CATEGORY_SUCCESS,
            payload: data
            
        })
    } catch (error) {
        dispatch({
            type:PRODUCTS_CATEGORY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}
