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



export const loginReducer = (state = {}, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {loading:true, }
        case LOGIN_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case LOGIN_FAIL:
            return {loading:false, error:action.payload}
        case LOGOUT:
            return {}
        default:
            return state
    }
}



export const registerReducer = (state = {}, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
            return {loading:true, }
        case REGISTER_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case REGISTER_FAIL:
            return {loading:false, error:action.payload}
        case LOGOUT:
            return {}
        default:
            return state
    }
}


export const activationReducer = (state = {}, action) => {
    switch(action.type) {
        case ACTIVATION_REQUEST:
            return {loading:true, }
        case ACTIVATION_SUCCESS:
            return {loading:false}
        case ACTIVATION_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}


export const resetPasswordReducer = (state = {}, action) => {
    switch(action.type) {
        case PASSWORD_RESET_REQUEST:
            return {loading:true, }
        case PASSWORD_RESET_SUCCESS:
            return {loading:false}
        case PASSWORD_RESET_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const resetPasswordConfirmReducer = (state = {}, action) => {
    switch(action.type) {
        case PASSWORD_RESET_CONFIRM_REQUEST:
            return {loading:true, }
        case PASSWORD_RESET_CONFIRM_SUCCESS:
            return {loading:false}
        case PASSWORD_RESET_CONFIRM_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}