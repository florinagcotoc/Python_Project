import axios from "axios";
import {
    LOGIN_SUCCESS,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET,
} from '../constants/types';


export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: { userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`${process.env.REACT_APP_BACKEND}/api/${id}/`, config )

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
        
    }
    catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
};

export const updateUserProfile = (user) => async(dispatch, getState) => {
    console.log('xxx:',user)
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        // to update the user profile, the user must be logged in
        const {
            userLogin: { userInfo},
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userInfo.token}`
            }
        }
        const {data} = await axios.patch(
            `${process.env.REACT_APP_BACKEND}/api/actualizare-profil/${user.id}/`,
            user,
            config
            )
        console.log("DATA",data)
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: user
        })

        // log in the user with the new profile  
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        
    }
    catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}