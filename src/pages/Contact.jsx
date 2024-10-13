import React from 'react'
import CommonComponent from './../components/CommonComponent';

function Contact() {
  return (
    <div className=''>
      <CommonComponent contact='Contact Us'/>

      <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-24 pb-24 bg-slate-50'>
        <div className='lg:flex gap-10'>
          <div className='lg:w-1/2'>
            <h1 className='text-3xl font-semibold text-indigo-900 text-center lg:text-start'>Contact Us</h1>
            <p className='text-gray-500 mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
            <h1 className='text-xl font-semibold text-indigo-900 mt-3'>Call Us</h1>
            <h1 className='text-gray-500 mt-3'>01648936921</h1>
            <h1 className='text-xl font-semibold text-indigo-900 mt-3'>Email us</h1>
            <h1 className='text-gray-500 mt-3'>swe.rasel@gmail.com</h1>
            <h1 className='text-gray-500 mt-2'>Support@gamil.com</h1>
            <h1 className='text-xl font-semibold text-indigo-900 mt-3'>Our Adress</h1>
            <h1 className='text-gray-500 mt-3'>Gazipur</h1>
            <h1 className='text-gray-500 mt-2'>Bangladesh</h1>
          </div>
          <div className='lg:w-1/2'>
            <h1 className='text-3xl font-semibold text-indigo-900'>Leave a message here</h1>
            <form action="" className='mt-8'>
              <div className='flex flex-col md:flex-row gap-4'>
                <input type="text" name="" id="" className='p-3 bg-white text-gray-500 rounded-sm w-full shadow-md' placeholder='Name*'/>
                <input type="text" name="" id="" className='p-3 bg-white text-gray-500 rounded-sm w-full shadow-md' placeholder='Email*'/>
              </div>
              <div className='flex flex-col md:flex-row gap-4 mt-6'>
                <input type="text" name="" id="" className='p-3 bg-white text-gray-500 rounded-sm w-full shadow-md' placeholder='Subject*'/>
                <input type="text" name="" id="" className='p-3 bg-white text-gray-500 rounded-sm w-full shadow-md' placeholder='Phone*'/>
              </div>
              <input type="text" name="" id="" className='h-48 w-full shadow-md rounded-sm p-3 mt-6' placeholder='Message*'/>

              <button className='mt-9 bg-blue-500 px-8 py-3 rounded-full text-white hover:bg-indigo-900 transition-all'>Send Message</button>
            </form>
          </div>
        </div>

        <div className='mt-20  p-3 rounded-md bg-white' >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58308.814657324656!2d90.36575595671752!3d24.020451542921226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dafdd8aa72a1%3A0xe3a23793cb030fdb!2sGazipur!5e0!3m2!1sen!2sbd!4v1728551605029!5m2!1sen!2sbd" className='w-full h-96' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact