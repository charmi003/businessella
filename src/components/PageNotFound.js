import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='mx-auto text-center w-1/2'>
            <h1 className='font-semibold text-lg mt-16'>Page Not Found!!</h1>
            <Link to='/' className='font-medium text-gray-600 hover:underline'>Back to Home</Link>
        </div>
    )
}

export default PageNotFound
