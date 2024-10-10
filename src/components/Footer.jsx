import React from 'react'
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { CiYoutube,CiMail } from "react-icons/ci";


function Footer() {
  return (
    <div className='bg-indigo-900 px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72'>
        <div className=' pt-20 pb-14 text-white grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0'>
            <div className=' lg:col-span-4 pr-4 '>
                <div className=' flex justify-center md:block'>
                    <img src="logo/white-logo.svg" className='h-9'/>
                </div>
                <p className=' font-semibold mt-5 text-sm text-center md:text-start'>Making the world a better place through constructing elegant hierarchies.</p>
                <h1 className='font-bold mt-6 text-lg  text-center md:text-start'>Follow Us On:</h1>
                <div className='mt-5 flex gap-5 justify-center md:justify-start'>
                    <span className='transition-all ease-out duration-500 hover:text-blue-600'><FaFacebookF /></span>
                    <span className='transition-all ease-out duration-500 hover:text-blue-600'><FaInstagram /></span>
                    <span className='transition-all ease-out duration-500 hover:text-blue-600'><FiTwitter /></span>
                    <span className='transition-all ease-out duration-500 hover:text-blue-600'><RiLinkedinBoxLine /></span>
                    <span className='transition-all ease-out duration-500 hover:text-blue-600'><CiYoutube /></span>
                </div>

            </div>

            <div className=' lg:col-span-2'>
                <h1 className='text-xl font-semibold text-center md:text-start'>Solutions</h1>
                <h2 className='font-semibold mt-7 text-center md:text-start'>Marketing</h2>
                <h2 className='font-semibold mt-3 text-center md:text-start'>Analytics</h2>
                <h2 className='font-semibold mt-3 text-center md:text-start'>Commerce</h2>
                <h2 className='font-semibold mt-3 text-center md:text-start'>Insights</h2>

            </div>

            <div className=' lg:col-span-2'>
                <h1 className='text-xl font-semibold text-center md:text-start'>Support</h1>
                <h2 className='font-semibold mt-7 text-center md:text-start'>Pricing</h2>
                <h2 className='font-semibold mt-3 text-center md:text-start'>Documentation</h2>
                <h2 className='font-semibold mt-3 text-center md:text-start'>Guide</h2>
                <h2 className='font-semibold mt-3 text-center md:text-start'>API Status</h2>
            </div>

            <div className=' lg:col-span-4'>
                <h1 className='text-xl font-semibold text-center md:text-start'>Support</h1>
                <p className='mt-7 font-semibold text-center md:text-start'>Subscribe to our newsletter for the latest updates</p>
                <div className='mt-7 flex justify-center items-center'>
                    <input type="text" className='px-4 py-4 rounded-l-md outline-none w-full bg-indigo-800 text-white' placeholder='Email Address'/>
                    <span className='bg-indigo-700 p-[18px] rounded-r-md text-xl text-white'><CiMail /></span>
                </div>
            </div>
        </div>

        <div className='border-t border-indigo-500 pt-5 pb-16  md:flex justify-between font-semibold text-white'>
            <p className='text-center md:text-start'>© 2024 CryptoLand - All Rights Reserved</p>
            <p className='text-center md:text-start'> Developed by Rasel</p>
        </div>
    </div>
  )
}

export default Footer