import React from 'react'

const Addmembers = () => {
    return (
        <div className='text-black'>
            <div className='grid gap-5 grid-cols-2 text-lg'>

            <input  placeholder='Name of the Joinee' type='text' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
            <input  placeholder='Mobile No.' type='text' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
            <input  placeholder='Address' type='text' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
            <input   type='date' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />

            <select className='border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md palceholder:text-gray'>
                <option>Male</option>
                <option>Female</option>
            </select>

            <select className='border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md palceholder:text-gray'>
                <option>1 Month Membership</option>
                <option>2 Month Membership</option>
            </select>


            <input type='file'/>

            <div className='w-1/4'>
            <img src={'https://wallpaperaccess.com/full/939999.jpg'} className='w-full h-full rounded-full' />
            </div>

            <div className='p-3 boredr-2 mt-5 w-28 text-lg h-14 text-center  bg-slate-900 text-white rounded-xl cursor-pointer  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Register</div>

            </div>
        </div>
    )
}

export default Addmembers
