import React from 'react'

import Blogs from './Blogs';

function Blog() {
    
  return (
    <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-16 mb-16'>
        <div className='w-full  flex justify-center'>
            <div className='w-full md:w-3/4 xl:w-1/2  text-center'>
                <h2 className='text-lg text-blue-600'>Blogs</h2>
                <h1 className='text-4xl font-semibold text-indigo-900 mt-3'>Our Latest News</h1>
                <p className='text-gray-500 mt-5 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </div>

        <Blogs value='xl:grid-cols-3 mt-12'/>
        
    </div>
  )
}

export default Blog