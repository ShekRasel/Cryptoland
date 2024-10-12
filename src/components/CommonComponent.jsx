import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function CommonComponent({about,contact,signup,signin,password,blogGrid}) {
  return (
    <div className='h-96 w-full bg-indigo-900 pt-40 flex flex-col items-center text-white'>
        <h1 className='text-3xl font-semibold'>{about}{contact}{signup}{signin}{password}{blogGrid}</h1>
        <div className='flex items-center gap-3 mt-4'>
            <span className='text-blue-500'><Link to={'/'}>Home</Link></span>
            <span><IoIosArrowForward /></span>
            <span>{about}{contact}{signup}{signin}{password}{blogGrid}</span>
        </div>
    </div>
  )
}

export default CommonComponent