import React from 'react'

function Categories() {
  return (
    <div className='bg-slate-50 rounded-md  border-t-4 border-blue-500 p-10 shadow-md'>
         <h1 className='text-2xl font-semibold text-indigo-900 mt-2'>Categories</h1>
         <ul className='py-7 text-indigo-900'>
            <li className='p-2 hover:translate-x-3 transition-all'>BlockChain</li>
            <li className='p-2 hover:translate-x-3 transition-all'>Technology</li>
            <li className='p-2 hover:translate-x-3 transition-all'>Startup</li>
            <li className='p-2 hover:translate-x-3 transition-all'>Technology</li>
            <li className='p-2 hover:translate-x-3 transition-all'>Cryptocurrency</li>
         </ul>
    </div>
  )
}

export default Categories