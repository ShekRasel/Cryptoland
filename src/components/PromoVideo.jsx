import React from 'react'
import { IoPlayOutline } from "react-icons/io5";

function PromoVideo() {
  return (
        <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 mt-24 bg-indigo-900 h-96 mb-72 pt-16'>
            <div className='mt-16 rounded-3xl p-8 bg-indigo-600 blu'>
                    <div className='bg-white rounded-3xl opacity-100 pt-20 pb-20 border'>
                        <h1 className='text-blue-600  text-center text-lg'>Create your own experience</h1>
                        <h1 className='text-4xl mt-5 text-indigo-900 font-bold text-center'>Watch our Intro Video</h1>
                        <p className='text-gray-500 mt-6 text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <div className='mt-20 flex justify-center'>
                                <span className='text-2xl border rounded-full bg-blue-600 p-8 text-white animate-pulse'>
                                    <IoPlayOutline className=''/>
                                </span>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default PromoVideo