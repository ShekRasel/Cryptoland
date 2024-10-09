import React, { useState } from 'react'
import { HiPlus,HiOutlineMinus } from "react-icons/hi2";

function Faq() {
    const [open,setIsOpen] = useState(null);

    const openDescription = (index)=>{
        setIsOpen(prevIndex =>(prevIndex === index? null : index));
    }
    const faqs = [{
        header:'How can I participate in the ICO Token sale?',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.'
    },
    {
        header:'How can I purchase bitcoin?',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.'
    },
    {
        header:'What crptocurrencies can i see to purchase?',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.'
    },
    {
        header:'Do i need an account to place an order?',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.'
    },
    {
        header:'How do i benefit from the ICO Token?',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.'
    },
    {
        header:'What is ICO Crypto?',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.'
    }]
  return (
    <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-16 pb-16 bg-slate-100'>

        <div className='w-full  flex justify-center'>
                <div className='w-full md:w-3/4 xl:w-1/2  text-center'>
                    <h2 className='text-lg text-blue-600'>Faq</h2>
                    <h1 className='text-4xl font-semibold text-indigo-900 mt-3'>Frequently Asked Questions</h1>
                    <p className='text-gray-500 mt-5 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
        </div>

        <div className='mt-14 grid md:grid-cols-2 gap-8'>
            {
                faqs.map((faq,index)=>(
                        <div className='rounded-sm' key={index}>

                            <div className={`flex justify-between p-5  ${open === index ?'bg-blue-600 text-white':'bg-white text-indigo-900'}`} onClick={()=>{openDescription(index)}}>
                                <h1 className='font-semibold'>{faq.header}</h1>
                                <span>
                                {open === index ?<HiOutlineMinus className=''/>:<HiPlus/>}
                                </span>
                            </div>

                            <div className={`${open === index ? 'max-h-96':'max-h-0'} overflow-hidden transition-all ease-in-out duration-700 bg-white`}>
                                <p className='p-5 pt-10'>
                                    {faq.description}
                                </p>
                            </div>

                        </div>
                ))
            }
        </div>
    </div>
  )
}

export default Faq