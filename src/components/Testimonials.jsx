import React, { useState } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function Testimonials() {
    const [currentIndex , setCurrentIndex] = useState(0);

    const slideRight = ()=>{
        setCurrentIndex((prevIndex)=> (prevIndex + 3) % testiMonials.length);
    }

    const slideLeft = ()=>{
       setCurrentIndex((prevIndex)=>prevIndex === 0 ? testiMonials.length - 3 : prevIndex - 3)
    }

    const testiMonials = [{
        massage : '“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”',
        photo:'images/testi-1.png',
        name : 'David Warner',
        designation : 'Graphics Designer'
    },
    {
        massage : '“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”',
        photo:'images/testi-2.png',
        name : 'Jems Gilario',
        designation : 'Web Developer'
    },
    {
        massage : '“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”',
        photo:'images/testi-3.png',
        name : 'Somalia D Silva',
        designation : 'Business Manager'
    },
    {
        massage : '“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”',
        photo:'images/testi-3.png',
        name : 'David Warner',
        designation : 'Graphics Designer'
    },
    {
        massage : '“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”',
        photo:'images/testi-2 (1).png',
        name : 'Peter Parker',
        designation : 'Product Designer'
    },
    {
        massage : '“A vast number of clients decide to create dedicated software is the online store. It is nothing but a website with a catalog of products and the possibility.”',
        photo:'images/testi-1.png',
        name : 'Jon Son',
        designation : 'Designer'
    },
]
  return (
    <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-24 pb-24 bg-slate-50'>

       <div className='flex justify-center'>
            <div className='lg:w-1/2'>
                <h1 className='text-lg font-semibold text-blue-600 text-center'>Customer Reviews</h1>
                <h1 className='text-4xl font-semibold text-indigo-900 text-center mt-4'>Our Testimonials</h1>
                <p className='text-gray-500 xl:px-34 text-center mt-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
       </div>

        <div className=' mt-12  '>
            <div className='  '>
                <div className='flex overflow-hidden gap-'>
                        {
                            testiMonials.map((Testimonial,index)=>(
                                <div className={`px-2 py-2  rounded-lg  flex-shrink-0 w-full md:w-1/2 xl:w-1/3 transition-all ease-in-out duration-500`} key={index}
                                style={{transform:`translateX(-${currentIndex * 100}%)`}}
                                >
                                    

                                    <div className=' px-4 pb-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all ease-in-out duration-500 relative'>
                                    <div className='h-8 bg-blue-600 right-0 w-8 absolute rounded-es-full'>
                                    </div>
                                        <p className='text-gray-500 pt-8'>{Testimonial.massage}</p>
                                        <div className='flex gap-4 items-center mt-10'>
                                            <img src={Testimonial.photo} alt="" className='w-12'/>
                                            <div>
                                                <h1 className='text-indigo-900 text-lg font-semibold'>{Testimonial.name}</h1>
                                                <h1 className='text-gray-500  text-lg font-semibold'>{Testimonial.designation}</h1>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>

            <div className='flex gap-4 w-full justify-center mt-10'>
                <button className='bg-blue-600 rounded-md  text-white p-4' onClick={slideLeft}><FaLongArrowAltLeft /></button>
                <button className='bg-blue-600 rounded-md  text-white p-4' onClick={slideRight}><FaLongArrowAltRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Testimonials