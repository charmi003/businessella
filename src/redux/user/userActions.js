import { SET_USER_PROFILE, SET_LOGIN_STATUS } from './userTypes'


//action creator for setting the user profile info
export const setUserProfile=(profileObj)=>{
    return {
        type:SET_USER_PROFILE,
        payload:profileObj
    }
}


//action creator for setting the user login status
export const setLoginStatus=(isLoggedIn)=>{
    return{
        type:SET_LOGIN_STATUS,
        payload:isLoggedIn
    }
}
