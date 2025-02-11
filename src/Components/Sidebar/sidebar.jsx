import React, { useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

    const [greeting, setGreeting] = useState("");

    const greetingMessage = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting("Good Morning 🌅");
        } else if (currentHour < 18) {
            setGreeting("Good Afternoon 🌞");
        } else if (currentHour < 21) {
            setGreeting("Good Evening 🌇");
        } else {
            setGreeting("Good Night 🌆");
        }
    }

    useEffect(() => {
        greetingMessage();
    }, [])
    return (
        <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5 font-extralight'>
            <div className='text-center  text-3xl'>RAW Gym</div>
            <div className='flex gap-5 my-5'>
                <div className='w-[100px] h-[100px] rSounded-lg'>
                    <img alt='gym' className='w-full h-full rounded-full' src='https://www.avikalp.com/cdn/shop/products/MWZ3588_wallpaper3.jpg?v=1653228859' />
                </div>
                <div>
                    <div className='text-2xl'>{greeting}</div>
                    <div className='text-xl mt-1 font-semibold'>Admin</div>
                </div>
            </div>

            <div className='mt-10 py-10 border-t-2 border-gray-700 '>
                <div className='flex items-center gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                    <div><HomeIcon /></div>
                    <div>Dashboard</div>
                </div>

                <div className=' flex items-center mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                    <div><GroupIcon /></div>
                    <div>Members</div>
                </div>

                <div className=' flex items-center mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                    <div><LogoutIcon /></div>
                    <div>Logout</div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
