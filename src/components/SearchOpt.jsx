import React from 'react'
import { IoIosSearch } from "react-icons/io";

function SearchOpt() {
  return (
    <div className='bg-slate-50 rounded-md  border-t-4 border-blue-500 p-10 shadow-md'>

        <h1 className='text-2xl font-semibold text-indigo-900 mt-2'>Search This Site</h1>
        <div className='flex mb-3 mt-2 items-center relative'>
            <input type="text" placeholder='Search...' className='w-full p-3 rounded-sm focus:ring-1 focus:ring-blue-500 focus:outline-none border transition-all'/>
            <IoIosSearch className='mr-3 text-2xl absolute right-0'/>
        </div>
    </div>
  )
}

export default SearchOpt