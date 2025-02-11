import React, { useState } from 'react'
import './signUp.css'
import Modal from '../Modal/Modal'
import ForgotPassword from '../ForgotPassword/forgotPassword';




const SignUp = () => {

    const [forgotPassword, setForgotPassword] = useState(false);

    const handleClose = () => {
        setForgotPassword(prev => !prev);
    }

    
    return (
        <div className='customSignup w-1/3 p-10 mt-20 ml-20 bg-gray-500 opacity-50 h-[500px] overflow-y-auto'>
            <div className='font-sans  text-white text-center text-3xl'>Register the GYM </div>
            <input type='text' className='w-full my-10 p-2 rounded-lg border-2 text-white ' placeholder='Enter Email' />
            <input type='text' className='w-full mb-10 p-2 rounded-lg border-2 text-white  ' placeholder='Enter Gym Name' />
            <input type='text' className='w-full mb-10 p-2 rounded-lg border-2 text-white  ' placeholder='Enter Username' />
            <input type='password' className='w-full mb-10 p-2 rounded-lg border-2 text-white  ' placeholder='Enter Password' />
            <input type='file' className='w-full mb-10 p-2 rounded-lg border-2 text-white' />
            <img src='https://images.unsplash.com/photo-1577221084712-45b0445d2b00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwZ3ltfGVufDB8fDB8fHww' className='mb-10 h-[200px] w-[250px]' />

            <div className='p-2 w-[80%] border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer'>Register</div>
            <div className='p-2 w-[80%] mt-5 border-2 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer ' onClick={() => handleClose()}>Forgot Password</div>
            {forgotPassword && <Modal header='Forgot Password' handleClose={handleClose}  content={<ForgotPassword />} />}
        </div>

    )
}

export default SignUp 
