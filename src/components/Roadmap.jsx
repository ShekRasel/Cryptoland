import React, { useState } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import FadeUpComponent from '../customAnimate components/FadeUpComponent';
import GrowUpElem from '../customAnimate components/GrowUpElem';

function  Roadmap() {
    const [currentIndex , setCurrentIndex] = useState(0);

    const slideRight = ()=>{
        setCurrentIndex((prevIndex)=> (prevIndex + 3) % roadmaps.length);
    }

    const slideLeft = ()=>{
       setCurrentIndex((prevIndex)=>prevIndex === 0 ? roadmaps.length - 3 : prevIndex - 3)
    }

    const roadmaps = [{date:'OCT 22 2024',description:'Btcc mode of payment in Bitcoin'},
        {date:'OCT 22 2024',description:'Btcc mode of payment in Bitcoin'},
        {date:'OCT 22 2024',description:'Btcc mode of payment in Bitcoin'},
        {date:'OCT 22 2024',description:'Btcc mode of payment in Bitcoin'},
        {date:'OCT 22 2024',description:'Btcc mode of payment in Bitcoin'},
        {date:'OCT 22 2024',description:'Btcc mode of payment in Bitcoin'},
    ];

  return (
    <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72  pb-24 bg-slate-100'>

       <div className='flex justify-center'>
            <div className='lg:w-1/2'>
            <GrowUpElem>
                <h1 className='text-4xl font-semibold text-indigo-900 text-center mt-4'>Road Map</h1>
            </GrowUpElem>
            <FadeUpComponent>
                <p className='text-gray-500 xl:px-34 text-center mt-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
</FadeUpComponent>
            </div>
       </div>

        <div className=' mt-12 '>
            <div className=' overflow-hidden'>
                    <div className='flex'>
                        {
                            roadmaps.map((map,index)=>(
                                    <div className='flex-shrink-0  border-b-2 border-blue-700 h-40 w-2/4 md:w-1/5 xl:w-1/6 xl:ml-[16.666667%] md:ml-[20%] ml-[25%] 
                                     transition-all ease-out duration-500'
                                    key={index}
                                    style={{transform:`translateX(-${currentIndex * 100}%)`}}
                                    >
                                        <div className='bg-white border rounded-md p-4'>
                                            <h1 className='text-indigo-900'>{map.date}</h1>
                                            <p className='text-gray-500'>{map.description}</p>
                                        </div>

                                        <div className='flex justify-center'>
                                            <div className='w-7 h-7 bg-white -mt-4 rotate-[45deg]'></div>
                                        </div>

                                        <div className='relative bottom-0 left-[45%]  md:-mt-2 lg:mt-[18px] hidden md:block'>
                                            <div className='rounded-full  bg-white border-2 border-blue-500 w-5 h-5   mt-4 text-white absolute'>.</div>
                                        </div>
                                    </div>
                            ))
                        }

                    </div>  

                <div className='flex md:gap-[20%] xl:gap-[16.666667%]  sm:gap-0'>
                        {
                            roadmaps.map((map,index)=>(
                                
                                <div className='flex-shrink-0 border-t-2  border-blue-700 h-40 w-2/4 md:w-1/5 xl:w-1/6 relative -top-[2px] transition-all ease-out duration-500'
                                style={{transform:`translateX(-${currentIndex * 100}%)`}}
                                key={index}
                                >

                                    <div className='absolute bottom-0'>
                                        <div className='flex justify-center'>
                                            <div className='w-7 h-7 bg-white absolute -mt-3 rotate-[45deg]'></div>
                                        </div>
                                        <div className='bg-white border rounded-md p-4  '>
                                            <h1 className='text-indigo-900'>{map.date}</h1>
                                            <p className='text-gray-500'>{map.description}</p>
                                        </div>

                                    </div>


                                    <div className='relative bottom-0 left-[45%] -mt-7 lg:-mt-7'>
                                            <div className='rounded-full  bg-white border-2 border-blue-500 w-5 h-5   mt-4 text-white absolute'>.</div>
                                    </div>
                                    
                                </div>
                            ))
                        }
                </div>
            </div>

            <div className='flex gap-4 w-full justify-center mt-24'>
                <button className='bg-blue-600 rounded-md  text-white p-4' onClick={slideLeft}><FaLongArrowAltLeft /></button>
                <button className='bg-blue-600 rounded-md  text-white p-4' onClick={slideRight}><FaLongArrowAltRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Roadmap