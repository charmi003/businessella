import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import { useSelector } from 'react-redux'

//This component renders the navbar
const Navbar = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return (
        <header className='flex justify-between items-center px-5'>
            <Link to='/'>
                <h2 className='text-2xl'>Businessella</h2>
            </Link>

            {/* If the user is already logged in, show him the links to orders and logout else to the login  */}
            {
                isLoggedIn ? 
                <div className='flex items-center'>
                    <Link to='/orders-page'>
                       <h4 className='text-lg mr-6 hover:text-gray-200'>Orders</h4>
                    </Link>
                    <Logout/>
                </div>
                : 
                <Login/>
            }

        </header>
    )
}

export default Navbar
