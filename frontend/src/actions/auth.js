import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    ACTIVATION_REQUEST,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_REQUEST,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
} from '../constants/types';

require('dotenv').config();


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
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND}/api/users/login/`,
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

export const register_func = (username, first_name, last_name, email, password, re_password) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND}/auth/users/`,
                        {'username': username, 'first_name': first_name, 'last_name': last_name, 'email':email, 'password':password, 're_password' : re_password}, config )

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

export const activation_func = (uid, token) => async (dispatch) => {
    try {
        dispatch({
            type: ACTIVATION_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND}/auth/users/activation/`,
                        {'uid': uid, 'token': token}, config )

        dispatch({
            type: ACTIVATION_SUCCESS,
        })        
    }
    catch (error) {
        dispatch({
            type: ACTIVATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};


export const reset_password_func = (email) => async (dispatch) => {
    try {
        dispatch({
            type: PASSWORD_RESET_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({email});

        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND}/auth/users/reset_password/`, body, config );

        dispatch({
            type: PASSWORD_RESET_SUCCESS,
        })        
    }
    catch (error) {
        dispatch({
            type: PASSWORD_RESET_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};


export const reset_password_confirm_func = (uid, token, new_password, re_new_password) => async (dispatch) => {
    try {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({uid, token, new_password, re_new_password});

        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND}/auth/users/reset_password_confirm/`, body, config )

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS,
        })
        
    }
    catch (error) {
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};

