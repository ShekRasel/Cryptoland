import React from 'react'
import { RiTimerLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';

function Blog() {
    const blogs = [
        {
            image:'images/blog-1.png',
            time : '10 June 2024',
            name : 'Anjelio Joly',
            header : 'The Intersection Where Blockchain Meets Energy.',
            description : 'Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore.',
            link : 'Read More'
        },
        {
            image:'images/blog-2.png',
            time : '5 Aug 2024',
            name : 'Kumila ksusi',
            header : 'Pros & Cons of Premined Cryptocurrencies.',
            description : 'Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore.',
            link : 'Read Blog'
        },
        {
            image:'images/blog-3.png',
            time : '25 Dec 2024',
            name : 'Alex Jendro',
            header : 'How & Where To Market Your ICO Startup.',
            description : 'Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy eirmod tempor ividunt dolore.',
            link : 'Read Blog'
        },
    ]
  return (
    <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-16 mb-16'>
        <div className='w-full  flex justify-center'>
            <div className='w-full md:w-3/4 xl:w-1/2  text-center'>
                <h2 className='text-lg text-blue-600'>Blogs</h2>
                <h1 className='text-4xl font-semibold text-indigo-900 mt-3'>Our Latest News</h1>
                <p className='text-gray-500 mt-5 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12'>

            {
                blogs.map((blog,index)=>(
                    <div className='bg-gray-50 rounded-md shadow-md overflow-hidden' key={index}>
                        <img src={blog.image} className=' rounded-t-md hover:scale-110 transition-all ease-out duration-500' alt="" />
                        <div className='py-8 px-6'>
                            <div className='flex gap-5 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <span className='text-indigo-500'><RiTimerLine /></span>
                                    <span>{blog.time}</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span className='text-indigo-500'><GoPerson /></span>
                                    <span>{blog.name}</span>
                                </div>
                            </div>

                            <Link>
                                <h1 className='text-indigo-900 font-semibold text-2xl mt-7'>{blog.header}</h1>
                            </Link>

                            <p className='mt-7 text-gray-500 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium sit fuga architecto assumenda. Lorem ipsum dolor sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            
                            <Link>
                                <h1 className='mt-7 text-indigo-500 underline'>{blog.link}</h1>
                            </Link>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Blog