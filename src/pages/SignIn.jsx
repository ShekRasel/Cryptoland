import React from 'react'
import CommonComponent from '../components/CommonComponent'
import { FcGoogle } from "react-icons/fc";
import { CiLock } from "react-icons/ci";

function SignIn() {
  return (
    <div>
        <CommonComponent signin='Sign In'/>
        <div className=' bg-slate-50 flex justify-center'>
            <div className='mt-20 mb-20  2xl:w-1/3  bg-white shadow-md rounded-md px-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl text-indigo-900 font-semibold mt-12'>Sign In Now</h1>
                    <p className='text-gray-500 mt-4'>Sign in by entering the information below.</p>
                </div>
                
                <div className='flex gap-4 bg-slate-100 w-full rounded-full items-center mt-6 p-2 pl-8 focus:ring-1 focus:ring-blue-500 border focus:outline-none' tabIndex={0}>
                    <span><CiLock /></span>
                    <input type="text" placeholder='Enter your email' className='text-gray-500 outline-none w-full py-1 bg-slate-100'/>
                </div>
                <div className='flex gap-4 bg-slate-100 w-full rounded-full items-center mt-6 p-2 pl-8  border'>
                    <span><CiLock /></span>
                    <input type="text" placeholder='Enter your password' className='text-gray-500 outline-none w-full py-1 bg-slate-100'/>
                </div>

                <div className='mt-6 flex justify-between px-2'>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" />
                        <p className='text-gray-500'>Remember me</p>
                    </div>
                    <p className='text-gray-500 hover:text-blue-500 cursor-pointer'>Forgot password?</p>
                </div>

                <button className='bg-blue-500 p-3 rounded-full text-white w-full mt-8 hover:bg-indigo-900 transition-all'>Sign In</button>

                <div className='flex justify-center items-center mt-6 gap-4'>
                    <div className='w-full border'></div>
                    <h1 className='text-gray-500 font-semibold'>Or</h1>
                    <div className='w-full border'></div>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='mt-8 text-gray-500 text-sm'>Sign In With your work email</p>
                    <div className='flex items-center mt-3 gap-3 cursor-pointer p-3 border rounded-full'>
                        <span className='text-2xl'><FcGoogle /></span>
                        <p className='text-gray-500'>Sign In With Google</p>
                    </div>
                </div>

                <p className='flex justify-center gap-2 mt-10 mb-10'>
                    <span className='text-gray-500'>Don't have an account? </span><span className='text-blue-500'>Sign Up Here</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignIn