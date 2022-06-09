import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../constants/types';


export const login_func = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8000/api/users/login/',
                        {'email':email, 'password':password}, config )

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        
    }
    catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};


export const logout_func = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch ({
        type:LOGOUT
    })
}

export const register_func = (username, first_name, last_name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8000/auth/users/',
                        {'username': username, 'first_name': first_name, 'last_name': last_name, 'email':email, 'password':password}, config )

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        
    }
    catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};