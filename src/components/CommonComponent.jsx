import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function CommonComponent({about,About,aboutLink}) {
  return (
    <div className='h-96 w-full bg-indigo-900 pt-40 flex flex-col items-center text-white'>
        <h1 className='text-3xl font-semibold'>{about}</h1>
        <div className='flex items-center gap-3 mt-4'>
            <span><Link to={`${aboutLink}`}>{About}</Link></span>
            <span><IoIosArrowForward /></span>
            <span>{about}</span>
        </div>
    </div>
  )
}

export default CommonComponent