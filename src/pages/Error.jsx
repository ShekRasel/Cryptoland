import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='h-screen bg-indigo-500 flex justify-center items-center'>
        <div className='bg-white rounded-md shadow-md  p-16 '>
            <div className='flex flex-col items-center'>
                <h1 className='text-8xl font-bold text-blue-500'>
                    404
                </h1>
                <p className='mt-8 text-indigo-900 text-center  text-2xl font-semibold'>The page you were looking for
                doesn't exist anymore.</p>

                <p className='mt-8 text-gray-500 text-center'>It might have been moved or deleted.</p>
                
                <Link to={'/'}>
                    <button className='text-white bg-blue-500 p-3 px-7 rounded-full hover:bg-indigo-900 transition-all mt-8'>Back To Home</button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Error