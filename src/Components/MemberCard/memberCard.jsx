import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const MemberCard = () => {
    return (
        <Link to={'/member/123'} className='bg-white rounded-lg p-3 hover:bg-gradient-to-r from indigo-500 via-purple-500 to-pink-500 hover:text-white cursor-pointer'>
            <div className='w-28 h-28 flex justify-center relative items-center border-2 p-1 mx-auto rounded-full'>
                <img className='w-full h-full rounded-full' src='https://c4.wallpaperflare.com/wallpaper/199/924/33/muscle-muscle-bodybuilding-press-wallpaper-preview.jpg' alt='Profile pic' />
                <CircleIcon className='absolute top-0 left-0' sx={{ color: "greenyellow" }} />
            </div>

            <div className='mx-auto mt-5 text-center text-xl font-semibold font-mono'>
                {"Dhrutesh Dev"}
            </div>

            <div className='mx-auto mt-2 text-center text-xl  font-mono'>
                {"+91 " + "1234567890"}
            </div>

            <div className='mx-auto mt-2 text-center text-xl  font-mono'>
                Next Bill Date : {"31-01-2025"}
            </div>

        </Link>
    )
}

export default MemberCard
