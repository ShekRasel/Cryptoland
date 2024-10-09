import React from 'react'
import CommonComponent from '../components/CommonComponent'
import { IoCheckmarkOutline } from "react-icons/io5";
import SetUpAndStarted from '../components/SetUpAndStarted';
import Testimonials from '../components/Testimonials';
import TeamMate from '../components/TeamMate';

function About() {
  return (
    <div className=''>
      <CommonComponent about='About Us' About='About' aboutLink='/'/>

      <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-24 pb-24'>
        <div className='lg:flex gap-16'>
            <div className='lg:w-1/2'>
              <img src="images/about-image.png" alt="" />
            </div>

            <div className='lg:w-1/2 mt-10 lg:mt-0'>
                <h1 className='text-blue-600'>DECENTRALISED ECONOMY</h1>
                <h1 className='text-4xl mt-4 font-semibold text-indigo-900'>We’ve built a platform to buy and sell shares.</h1>
                <p className='mt-5 text-gray-500'>Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sale.</p>

                <div className='grid lg:grid-cols-2 mt-14 gap-8'>
                  <div className='flex gap-4'>
                  <span className=' text-3xl text-white '><IoCheckmarkOutline className='border bg-blue-600 rounded-full hover:rotate-180 transition-all p-1'/></span>
                    <div>
                      <h1 className='font-semibold text-indigo-900'>Modular structure</h1>
                      <h1 className='text-gray-500 mt-1'>Quis autem vel eum reprehenderit</h1>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                  <span className=' text-3xl text-white '><IoCheckmarkOutline className='border bg-blue-600 rounded-full hover:rotate-180 transition-all p-1'/></span>
                    <div>
                      <h1 className='font-semibold text-indigo-900'>Modular structure</h1>
                      <h1 className='text-gray-500 mt-1'>Quis autem vel eum reprehenderit</h1>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <span className=' text-3xl text-white '><IoCheckmarkOutline className='border bg-blue-600 rounded-full hover:rotate-180 transition-all p-1'/></span>
                    <div>
                      <h1 className='font-semibold text-indigo-900'>Modular structure</h1>
                      <h1 className='text-gray-500 mt-1'>Quis autem vel eum reprehenderit</h1>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>

      <SetUpAndStarted bgColor='bg-indigo-900' textColor='text-white'/>

      <Testimonials/>

      <TeamMate/>

      <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 py-4 flex flex-col gap-4 items-center md:flex-row md:justify-between bg-slate-100'>
          <img src="logo/graygrids-logo.svg" alt="" className='w-36 2xl:w-72'/>
          <img src="logo/lineicons-logo.svg" alt="" className='w-36 2xl:w-72'/>
          <img src="logo/ayro-logo.svg" alt="" className='w-36 2xl:w-72'/>
          <img src="logo/uideck-logo.svg" alt="" className='w-36 2xl:w-72'/>
      </div>
    </div>
  )
}

export default About