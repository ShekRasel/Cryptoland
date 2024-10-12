import React from 'react'
import { MdCalendarMonth } from "react-icons/md";

function TrendNews() {
  return (
    <div className='bg-slate-50 rounded-md  border-t-4 border-blue-500 p-10 shadow-md'>
        <h1 className='text-2xl font-semibold text-indigo-900 mt-2'>Trending News</h1>
        <p className='mt-7  font-semibold text-indigo-900'>Bringing Great Design Ideas To Completion</p>
        <h1 className='text-gray-500 flex items-center gap-2 mt-5'><MdCalendarMonth /> 05th Oct 2024</h1>

        <div className='py-4 border-t border-b mt-8 mb-8'>
            <p className='font-semibold text-indigo-900'>Live Life Smart And Focus On The positive</p>
            <h1 className='text-gray-500 flex items-center gap-2 mt-5'><MdCalendarMonth /> 05th Oct 2024</h1>
        </div>

        <p className='font-semibold text-indigo-900 mt-3'>How did we get 1M+ vistiors in 30 days without anything!</p>
        <h1 className='text-gray-500 flex items-center gap-2 mt-5'><MdCalendarMonth /> 05th Oct 2024</h1>
    </div>
  )
}

export default TrendNews