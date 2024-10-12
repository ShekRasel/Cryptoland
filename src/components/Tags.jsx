import React from 'react'

function Tags() {
  return (
    <div className='bg-slate-50 rounded-md  border-t-4 border-blue-500 p-6 lg:p-10 shadow-md '>
         <h1 className='text-2xl font-semibold text-indigo-900 mt-2'>Trending News</h1>
         <div  className='sm:flex gap-3 mt-3 '>
            <button className='rounded-full px-5 py-2 border hover:bg-blue-500 transition-all hover:text-white '>Crypto</button>
            <button className='rounded-full px-5 py-2 border hover:bg-blue-500 transition-all hover:text-white '>Consultation</button>
            <button className='rounded-full px-5 py-2 border hover:bg-blue-500 transition-all hover:text-white '>Case</button>
         </div>
         <div  className='flex gap-3 mt-3'>
            <button className='rounded-full px-5 py-2 border hover:bg-blue-500 transition-all hover:text-white '>Attorney</button>
            <button className='rounded-full px-5 py-2 border hover:bg-blue-500 transition-all hover:text-white '>BTC</button>
         </div>
         <div  className='flex gap-3 mt-3'>
            <button className='rounded-full px-5 py-2 border hover:bg-blue-500 transition-all hover:text-white '>Crypto Currency</button>
            <button className='rounded-full px-5 py-2 border hover:bg-blue-500 transition-all hover:text-white '>Dollar</button>
         </div>
         <div className='flex gap-3 mt-3'>
            <button className='rounded-full px-5 py-2 border hover:bg-blue-500 transition-all hover:text-white '>
                Ethereum
            </button>
         </div>
    </div>
  )
}

export default Tags