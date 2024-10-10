import React from 'react'
import CommonComponent from '../components/CommonComponent'
import { FcGoogle } from "react-icons/fc";
import { CiLock } from "react-icons/ci";

function SignUp() {
  return (
    <div>
        <CommonComponent signup='Sign Up'/>
        <div className=' bg-slate-50 flex justify-center'>
            <div className='mt-20 mb-20 2xl:w-1/3  bg-white shadow-md rounded-md px-10'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl text-indigo-900 font-bold mt-12'>Sign Up Now</h1>
                    <p className='text-gray-500 mt-4'>Use the form below to create your account.</p>
                    <p className='mt-8 text-gray-500 text-sm'>Sign up With your work email</p>
                    <div className='flex items-center mt-3 gap-3 cursor-pointer p-3 border rounded-full'>
                        <span className='text-2xl'><FcGoogle /></span>
                        <p className='text-gray-500'>Sign Up With Google</p>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-6 gap-4'>
                    <div className='w-full border'></div>
                    <h1 className='text-gray-500 font-semibold'>Or</h1>
                    <div className='w-full border'></div>
                </div>

                <div className='flex flex-col md:flex-row gap-6 mt-8'>
                    <input type="text" placeholder='Your Name' className='text-gray-500 bg-slate-100 p-3 rounded-full border focus:outline-none focus:ring-1 focus:ring-blue-500 pl-10 w-full'/>
                    <input type="text" placeholder='Your Email' className='text-gray-500 bg-slate-100 p-3 rounded-full border focus:outline-none focus:ring-1 focus:ring-blue-500  pl-10'/>
                </div>
                <div className='flex gap-4 bg-slate-100 w-full rounded-full items-center mt-6 p-2 pl-8 focus:ring-1 focus:ring-blue-500 border focus:outline-none' tabIndex={0}>
                    <span><CiLock /></span>
                    <input type="text" placeholder='Your Password' className='text-gray-500 outline-none w-full py-1 bg-slate-100'/>
                </div>
                <div className='flex gap-4 bg-slate-100 w-full rounded-full items-center mt-6 p-2 pl-8  border'>
                    <span><CiLock /></span>
                    <input type="text" placeholder='Confirm Password' className='text-gray-500 outline-none w-full py-1 bg-slate-100'/>
                </div>

                <button className='bg-blue-500 p-3 rounded-full text-white w-full mt-8 hover:bg-indigo-900 transition-all'>Create Account</button>
                <p className='flex justify-center gap-2 mt-10 mb-10'>
                    <span className='text-gray-500'>Already have an account? </span><span className='text-blue-500'>Sign In</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignUp