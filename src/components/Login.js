import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { setUserProfile } from '../redux'
import { setLoginStatus } from '../redux'
import { useHistory } from 'react-router-dom'


//This component renders the Login button
const Login = () => {

    const dispatch = useDispatch()
    const history=useHistory();

    const clientId=process.env.REACT_APP_GOOGLE_CLIENT_ID;

    return ( 

        <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={(response)=>{ 
                dispatch(setUserProfile(response.profileObj));
                dispatch(setLoginStatus(true))
                history.push('/orders-page')    //redirect to the orders-page upon successful login
                }}
            onFailure={()=>{console.log("Login Failed!")}}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}  //to stay logged in
        >
        </GoogleLogin>
    )
}

export default Login
