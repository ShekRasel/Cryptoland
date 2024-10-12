import React from 'react'
import CommonComponent from './../components/CommonComponent';
import Blogs from '../components/Blogs';
import SearchOpt from '../components/SearchOpt';
import TrendNews from './TrendNews';
import Categories from '../components/Categories';
import Tags from '../components/Tags';

function BlogGrid() {
    const aditionalBlogs = [{
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
    },]
  return (
    <div>
        <CommonComponent blogGrid='Blog Grid Sidebar'/>
        <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-24 pb-24 lg:flex'>
            <div className='lg:w-3/5 '>
                <Blogs value='lg:grid-cols-2' aditionalBlogs={aditionalBlogs}/>

                <div className='flex gap-2 sm:gap-3 lg:gap-4 mt-10'>
                    <button className=' rounded-md border px-5 lg:px-6 py-2 hover:bg-blue-500 hover:text-white transition-all'>Prev</button>
                    <button className=' rounded-md border px-4 sm:px-5 lg:px-6 py-2 bg-blue-500 text-white'>2</button>
                    <button className=' rounded-md border px-4 sm:px-5 lg:px-6 py-2 hover:bg-blue-500 hover:text-white'>3</button>
                    <button className=' rounded-md border px-4 sm:px-5 lg:px-6 py-2 hover:bg-blue-500 hover:text-white'>4</button>
                    <button className=' rounded-md border px-4 sm:px-5 lg:px-6 py-2 hover:bg-blue-500 hover:text-white'>Next</button>
                </div>
                
            </div>

            <div className='lg:w-2/5  lg:px-8 flex flex-col gap-10 mt-10 lg:mt-0'>
                <SearchOpt/>
                <TrendNews/>
                <Categories/>
                <Tags/>
            </div>
        </div>
    </div>
  )
}

export default BlogGrid