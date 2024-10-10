import React from 'react'
import CommonComponent from '../components/CommonComponent'
import { GoMail } from "react-icons/go";
import { Link } from 'react-router-dom';

function PasswordReset() {
  return (
    <div>
        <CommonComponent password='Reset Password'/>
        <div className='bg-slate-50 pt-24 pb-24 flex justify-center'>
            <div className='xl:w-3/5 2xl:w-1/3 shadow-md flex flex-col items-center p-14 bg-white rounded-md'>
                <h1 className='text-3xl font-bold text-indigo-900'>Reset Password</h1>
                <p className='text-gray-500 mt-3 text-center'>Need to reset your password? No problem! Just enter your email & click the button below.</p>
                <div className='flex items-center w-full mt-12'>
                    <span className=' absolute ml-4 text-gray-500'><GoMail /></span>
                    <input type="text" className='pl-12 py-3 w-full border rounded-full bg-slate-50 outline-none focus:ring-blue-500 focus:ring-1 transition-all' placeholder='Enter your email'/>
                </div>
                <button className='w-full rounded-full py-3 mt-6 bg-blue-500 hover:bg-indigo-900 transition-all text-white'>Send Rest Link</button>
                <h1 className='mt-8'>
                    Login to your account <span className='text-blue-500 hover:underline'><Link to={'/signin'}>Click here</Link></span>
                    
                </h1>
            </div>
        </div>
    </div>
  )
}

export default PasswordReset