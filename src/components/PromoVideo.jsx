import React, { useState } from 'react'
import { IoPlayOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function PromoVideo() {
    const [play , setIsPlay ] = useState(false);
    const playVideo = ()=>{
        setIsPlay(!play);
    }
  return (
    <div className='mb-96 relative'>
        <div className='px-3  bg-[#24126A] h-96 relative border md:px-8 lg:px-12 xl:px-16 2xl:px-72 mt-24 '>
            <div className=' rounded-t-3xl p-8 bg-[#41327C] h-64 mt-[126px] border-gray-400 border'>  
            </div> 

            <div className='bg-white rounded-3xl pt-4 pb-4 md:pt-20 md:pb-20 border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-5/6  xl:w-5/6 2xl:w-4/6 mt-52 shadow-md px-4'>
                        <h1 className='text-blue-600  text-center text-lg'>Create your own experience</h1>
                        <h1 className='text-4xl mt-5 text-indigo-900 font-bold text-center'>Watch our Intro Video</h1>
                        <p className='text-gray-500 mt-6 text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <div className='mt-10 md:mt-20 flex justify-center '>
                                <div className='flex justify-center border rounded-full p-3'>
                                    <span className='text-2xl border rounded-full bg-blue-600 p-6 md:p-8 text-white hover:bg-indigo-900 animate-pulse'>
                                        <IoPlayOutline className='' onClick={playVideo}/>
                                    </span>
                                </div>
                        </div>
            </div>
        </div>

    {play && 
        <div className='h-screen bg-black fixed  top-0 right-0 left-0 z-50 opacity-90 w-full transition-all ease-out duration-500'>
            <span className='text-white right-0 absolute text-4xl animate-pulse mr-3 mt-3' ><RxCross1 onClick={playVideo}/></span>

            <div className='border h-full justify-center items-center flex flex-col'>
            <iframe 
                    className='w-1/2 h-1/2' 
                    src="https://www.youtube.com/embed/QTyzyP2Afys?autoplay=1&mute=1" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>}
    </div>
  )
}

export default PromoVideo