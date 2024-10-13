import React from 'react'
import CommonComponent from './../components/CommonComponent';
import SearchOpt from '../components/SearchOpt';
import TrendNews from './TrendNews';
import Categories from '../components/Categories';
import Tags from '../components/Tags';
import { HiArrowUturnLeft } from "react-icons/hi2";

function SingleBlog() {
  return (
    <div>

        <CommonComponent blogGrid='Blog Grid Sidebar'/>
        <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-24 pb-24 lg:flex'>
            <div className='lg:w-3/5 '>
                <img src="images/blog-single.jpg" alt=""  className='rounded-md'/>
                <h1 className='text-3xl font-semibold text-indigo-900 mt-7'>
                    Google Pushes Crypto Into Mainstream With Bitcoin, ETH
                </h1>
                <h3 className='cursor-pointer text-sm text-gray-500 mt-7'>By Martin King <span className='px-8'>20 Jun 2023</span> Marketing</h3>
                <p className=' text-sm text-gray-500 mt-7'>With over 25,000 customers worldwide, Appex is the world leading analytics and marketing suite for Instagram and a partner of the world's most-loved brands such as National Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.</p>
                <p className=' text-sm text-gray-500 mt-7'>As a Customer Support Specialist, we expect you to be up-to-date with the latest digital technologies and social media trends. You should have excellent communication skills and be able to assist our customers in a fast, efficient and professional manner. If you enjoy fixing issues and helping improve the overall customer experience, this job is for you!</p>
                <h1 className='text-2xl font-semibold text-indigo-900 mt-7'>
                How We Do A Concert In Pandemic
                </h1>
                <div className='mt-7 md:flex gap-4'>
                    <img src="/public/images/blog-inner1.jpg" alt="" className='md:w-1/2 rounded-md'/>
                    <img src="/public/images/blog-inner2.jpg" alt="" className='md:w-1/2 rounded-md mt-10 md:mt-0'/>
                </div>
                <p className=' text-sm text-gray-500 mt-7'>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway
                </p>

                <p className=' text-sm text-gray-500 mt-7'>
                Heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional
                </p>

                <h1 className='text-2xl font-semibold text-indigo-900 mt-7'>
                Security and Reliability
                </h1>

                <p className=' text-sm text-gray-500 mt-7'>
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                </p>

                <div className='w-full rounded-md bg-indigo-800 p-8 mt-8'>
                    <p className='text-center font-semibold text-white'>
                    "Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well."
                    </p>
                    <h1 className='text-sm text-white text-center mt-6'>- Epictetus, The Enchiridion</h1>
                </div>

                <h1 className='text-2xl font-semibold text-indigo-900 mt-7'>
                Setting the mood with incense
                </h1>

                <p className=' text-sm text-gray-500 mt-7'>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time
                </p>

                <p className=' text-sm text-gray-500 mt-7'>
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                </p>

                <h1 className='text-2xl font-semibold text-indigo-900 mt-16'>
                Setting the mood with incense
                </h1>


                <div className='md:flex gap-10  mt-12'>
                    <img src="images/comment1.jpg" alt="" className='rounded-full w-24 h-24'/>
                    <div className=''>
                        <div className='flex justify-between'>
                            <h1 className='text-indigo-900 text-lg font-semibold'>Wiliyam Smith</h1>
                            <span className='text-indigo-900 flex items-center gap-2'><HiArrowUturnLeft /> Replay</span>
                        </div>
                        <h2 className='text-sm text-gray-500'>28 Oct 2024</h2>

                        <p className='mt-8 text-sm text-gray-500'>
                        Donec aliquam ex ut odio dictum, ut consequat leo interdum. Aenean nunc ipsum, blandit eu enim sed, facilisis convallis orci. Etiam commodo lectus quis vulputate tincidunt. Mauris tristique velit eu magna maximus condimentum
                        </p>
                    </div>
                </div>

                <div className='md:flex gap-10  mt-12'>
                    <img src="images/comment2.jpg" alt="" className='rounded-full w-24 h-24'/>
                    <div className=''>
                        <div className='flex justify-between'>
                            <h1 className='text-indigo-900 text-lg font-semibold'>Jenifer Lofez</h1>
                            <span className='text-indigo-900 flex items-center gap-2'><HiArrowUturnLeft /> Replay</span>
                        </div>
                        <h2 className='text-sm text-gray-500'>28 Oct 2024</h2>

                        <p className='mt-8 text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>

                <div className='mt-16'>
                    <h1 className='text-2xl font-semibold text-indigo-900'>Leave a Comment</h1>

                    <form action="">
                        <div className='md:flex gap-4 mt-8 '>
                            <input type="text" className='bg-slate-50 border p-3 w-full' placeholder='Name*'/>
                            <input type="text" className='bg-slate-50 border p-3 w-full mt-8 md:mt-0' placeholder='Email*'/>
                        </div>

                        <textarea className='w-full bg-slate-50 border h-44 mt-8 p-4' placeholder='Comments*' name="" id="">
                        </textarea>

                        <button className='px-8 py-3 rounded-full bg-blue-500 text-white mt-6'>Post Comment</button>

                    </form>
                </div>

            </div>
            <div className='lg:w-2/5  lg:px-8 flex flex-col gap-10 mt-10 lg:mt-0 lg:pl-14'>
                <SearchOpt/>
                <TrendNews/>
                <Categories/>
                <Tags/>
            </div>
        </div>

    </div>
  )
}

export default SingleBlog