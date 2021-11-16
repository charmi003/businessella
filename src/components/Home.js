import React from 'react'
import ParticlesBg from 'particles-bg'
   
const Home = () => {
    
    return (
        <div>
             {/* Background animation */}
            <ParticlesBg num={200} type="circle" bg={true} /> 

            <p className='font-semibold text-6xl text-white text-center my-48 otto'>
                Welcome to Businessella !!
            </p>
            
        </div>
    )
}

export default Home
