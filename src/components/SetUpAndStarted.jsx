import React from 'react'

function SetUpAndStarted({bgColor,textColor}) {
  return (
    <div>
        <div className={`bg-gray-50 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-28 pb-28 ${bgColor}`}>

         <div className='flex justify-center'>
            <div className='lg:w-1/2 flex-col '>
                <h3 className={`text-blue-600 font-semibold text-center text-lg ${textColor}`}>Ready To Get Started?</h3>
                <h1 className={`text-3xl font-semibold text-indigo-950 mt-5 text-center ${textColor}`}>3 Steps to Start</h1>
                <p className={`text-gray-500 mt-6 text-center font-semibold ${textColor}`}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
         </div>

          <div className='text-indigo-900 lg:flex justify-between mt-16 font-bold gap-10 '>
            <div className='flex flex-col lg:flex-row  mt-10 lg:mt-0 gap-6 items-center'>
              <span className='rounded-full px-6 py-5 bg-white font-extrabold hover:bg-blue-600 hover:text-white border'>01</span>
              <div>
                <h1 className={`text-xl text-center pb-2 lg:pb-0 ${textColor}`}>Create Your Wallet</h1>
                <p className={`text-gray-500 text-center mt-2 ${textColor}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur tidio.</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row  mt-10 lg:mt-0 gap-6 items-center'>
              <span className='rounded-full px-6 py-5 bg-white font-extrabold hover:bg-blue-600 hover:text-white border'>02</span>
              <div>
                <h1 className={`text-xl text-center pb-2 lg:pb-0 ${textColor}`}>Make Payment</h1>
                <p className={`text-gray-500 text-center mt-2 ${textColor}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur tidio.</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row  mt-10 lg:mt-0 gap-6 items-center'>
              <span className='rounded-full px-6 py-5 bg-white font-extrabold hover:bg-blue-600 hover:text-white border'>03</span>
              <div>
                <h1 className={`text-xl text-center pb-2 lg:pb-0 ${textColor}`}>Buy & Sell Coins</h1>
                <p className={`text-gray-500 text-center mt-2 ${textColor}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur tidio.</p>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default SetUpAndStarted