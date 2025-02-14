import React, { useState } from 'react'

const ForgotPassword = () => {
    const [emailSubmit, setEmailSubmit] = useState(false)
    const [otpValidate, setOtpValidate] = useState(false)
    const [contentVal, setContentValue] = useState("Submit Your Email")
    const [inputField, setInputField] = useState({ email: "", otp: "", newPassword: "" });

    const handleSubmit = () => {
        if (!emailSubmit) {
            setEmailSubmit(true)
            setContentValue("Submit OTP")
        } else if (emailSubmit && !otpValidate) {
            setOtpValidate(true)
            setContentValue("Submit New Password")
        }

    }
    console.log(inputField)
    const handleOnChange = (event, name) => {
        setInputField({ ...inputField, [name]: event.target.value })
    }


    return (
        <div className='w-full'>
            <div className='w-full mb-5'>
                <div>Enter your Email</div>
                <input type='text' value={inputField.email} onChange={(event) => { handleOnChange(event, "email") }} className='w-1/2  p-2 rounded-lg border-2 text-black ' placeholder='Enter Email' />
            </div>

            {
                emailSubmit && <div className='w-full mb-5'>
                    <div>Enter your OTP</div>
                    <input type='text' value={inputField.otp} onChange={(event) => { handleOnChange(event, "otp") }} className='w-1/2  p-2 rounded-lg border-2 text-black ' placeholder='Enter OTP' />
                </div>
            }

            {
                otpValidate && <div className='w-full mb-5'>
                    <div>Enter your New Password</div>
                    <input type='password' value={inputField.newPassword} onChange={(event) => { handleOnChange(event, "newPassword") }} className='w-1/2  p-2 rounded-lg border-2 text-black ' placeholder='Enter New Password' />
                </div>
            }

            <div className='bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center text-lg border-2 hover:bg-white hover:text-black font-semibold cursor-pointer' onClick={() => handleSubmit()}>{contentVal}</div>

        </div>
    )
}

export default ForgotPassword 
