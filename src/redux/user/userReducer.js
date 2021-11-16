import { SET_LOGIN_STATUS, SET_USER_PROFILE } from "./userTypes"


const initialState={
    profileObj:null,
    isLoggedIn:false
}


const userReducer=(currState=initialState,action)=>{

    switch(action.type){
        case SET_USER_PROFILE:
            return{
                ...currState,
                profileObj:action.payload
            }
        case SET_LOGIN_STATUS:
            return{
                ...currState,
                isLoggedIn:action.payload
            }
        default:
            return currState
    }

}

export default userReducer