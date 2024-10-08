import React from 'react'

function Features() {
    const features = [
        {image:'images/feature-icon-1 (1).png',
        header:'Instant Exchange',
        descripsion:'Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.'},
        {image:'images/feature-icon-2.png',
            header:'Instant Exchange',
            descripsion:'Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.'},
        {image:'images/feature-icon-3.png',
            header:'Instant Exchange',
            descripsion:'Invest in Bitcoin on the regular or save with one of the highest interest rates on the market.'},
    ]
  return (
    <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 mt-20 pb-20'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {features.map((feature,index)=>(
            <div className='bg-white rounded-xl px-8 py-10 shadow-md border-t flex flex-col items-center hover:scale-105 transition-all ease-in-out duration-500 hover:border-t-4  hover:border-t-blue-600 hover:border-b-4 hover:border-b-blue-600' key={index}>
              <img src={feature.image} alt="" className=' w-1/3 h-5/6'/>
              <h1 className='text-xl text-indigo-700 font-semibold text-center mt-6'>{feature.header}</h1>
              <p className='mt-6 text-gray-500 font-semibold text-center'>{feature.descripsion}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Features