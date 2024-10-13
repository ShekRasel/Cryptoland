import React from 'react'
import Features from '../components/Features'
import TeamMate from '../components/TeamMate'
import PromoVideo from '../components/PromoVideo'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Faq from '../components/Faq'
import SetUpAndStarted from '../components/SetUpAndStarted'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className=''>
      <div className='relative'>
        <div class=" left-0 w-full h-[500px] lg:h-[760px] bg-indigo-900 transform top-2 rounded-b-[30px] md:rounded-b-[70px] xl:rounded-b-[130px] -skew-y-6"></div>
        <div className=" absolute top-0 rounded-r-full w-full bg-indigo-900 h-[80%] px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72  flex justify-center lg:justify-between items-center pt-52 pb-32 lg:gap-4 xl:gap-0">

          <div className='text-white flex flex-col items-center lg:items-start mt-16 lg:mt-36'>
            <h1 className='font-bold lg:text-lg '>Start Envesting & Earn Money</h1>
            <h1 className='text-3xl lg:text-5xl font-bold lg:mt-5 md:mt-3 pl-1 italic'>Say Goodbye To</h1>
            <h1 className='text-3xl lg:text-5xl font-bold lg:mt-5 md:mt-3 pl-1 italic'>Idle Money.</h1>
            <p className='pl-2 mt-8 font-semibold text-center lg:text-start'>Invest Your spare change in Bitcoin and save with <br /> crypto to e arn interest in real time.</p>
            <button className='mt-12  px-7 py-3 rounded-full bg-blue-500 font-semibold transition-all ease-in-out duration-500 hover:bg-white hover:text-indigo-800'>
              <Link to={'about'}>Discover More</Link>
            </button>
          </div>
          <div className=' relative hidden lg:block mt-32 '>
            <div>
              <img src="images/home2-bg.png" alt="" className='mr-24'/>
            </div>
            <div className=' absolute top-0 left-44  justify-center flex flex-col items-center animate-custom-bounce'>
              <img src="images/h2-bit-l.png" alt="" className=''/>
              <img src="images/h2-bit-m.png" alt="" className='w-20 mt-32'/>
            </div>
          </div>

          
        </div>
      </div>
        


        <div className=' bg-white 2xl:px-72 items-center justify-center flex flex-col  mt-24'>
          <div className='flex justify-center'>
              <div className='lg:w-1/2'>
                <h2 className='text-center text-blue-600 text-xl font-semibold'>Why Choose Us</h2>
                <h1 className='text-center text-indigo-800 text-4xl font-semibold mt-4 '>Our Features</h1>
                <p className='mt-6 font-semibold text-gray-500 text-center w-full  md:px-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio deserunt rerum ipsa, voluptate doloribus.</p>
              </div>
          </div>
        </div>
        <Features/>

        <SetUpAndStarted/>

        <TeamMate/>

        <PromoVideo/>

        <Testimonials/>

        <Blog/>

        <Faq/>
    </div>
  )
}

export default Home