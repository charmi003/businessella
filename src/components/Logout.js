import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { setUserProfile } from '../redux'
import { setLoginStatus } from '../redux'
import { useDispatch } from 'react-redux'

//This component renders the Logout button
const Logout = () => {
    
    const dispatch = useDispatch()

    return (
        <GoogleLogout
            clientId="683565112012-d7qih57e3lbgrcbdtk2ulkh88qnjtdst.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={()=>{
                dispatch(setUserProfile(null));
                dispatch(setLoginStatus(false));
            }}>
        </GoogleLogout>
    )
}

export default Logout
