import React from 'react'
import Table from './Table'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CreateOrderForm from './CreateOrderForm';

//This component is for the orders-page
const Orders = () => {
    const history=useHistory();
    const profileObj = useSelector(state => state.user.profileObj);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    //Redirect to the home page on unauthenticated access
    if(!isLoggedIn)
        history.push('/');

    return (
        <div className='flex flex-wrap'>

            <div className='w-full flex flex-wrap justify-center xl:block xl:w-1/3'>

                {/* Account Details */}
                <div className='mx-8 my-4'>
                    <img src={profileObj ? profileObj.imageUrl : null} alt='Profile Pic' height='150px' width='150px' className='block border rounded-full my-2'/>
                    <p className='text-lg font-semibold text-gray-700'>Name:-  
                        <span className='text-md font-normal text-gray-800'> {profileObj ? profileObj.name : null}</span>
                    </p>
                    <p className='text-lg font-semibold text-gray-700'>Email Id:-  
                        <span className='text-md font-normal text-gray-800'> {profileObj ? profileObj.email: null}</span>
                    </p>
                </div>

                {/* Form for creating a new order */}
                <div className='mx-4 mt-8 mb-4'>
                    <CreateOrderForm/>
                </div>

            </div>


            {/* Table listing all the orders */}
            <div className='w-full xl:w-2/3 my-4 px-3'>
                <Table/>
            </div>

        </div>
    )
}

export default Orders
