import React, { useState } from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

function TeamMate() {
  const [showLink, setShowLink] = useState(null);
  const showPersonLink = (index)=>{
    setShowLink(index);
  }
  const hidePersonLink = ()=>{
    setShowLink(null);
  }
    const teams = [
      {photo: 'images/team1.jpg',
        Name : 'Deco Milan',
        designation: 'Founder'
      },
      {photo: 'images/team2.jpg ',
        Name : 'Liza Marko',
        designation: 'Developer'
      },
      {photo: 'images/team3.jpg ',
        Name : 'John Smith',
        designation: 'Designer'
      },
      {photo: ' images/team4.jpg',
        Name : 'Amion Doe',
        designation: 'C0-Founder'
      },
    ]
  return (
    <div className='px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 pt-24 mb-24'>
     <div className='flex justify-center'>
        <div className='lg:w-1/2'>
          <h2 className='text-blue-600 text-center text-lg font-semibold'>Expert Team</h2>
          <h1 className='text-indigo-900 text-3xl font-semibold mt-6 text-center'>Meet Our Team</h1>
          <p className='text-gray-500 text-center mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>

        </div>
     </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 gap-12 xl:gap-0 '>
        {
          teams.map((team,index)=>( 
            <div className='flex flex-col items-center' key={index}  onMouseEnter={()=>showPersonLink(index)} onMouseLeave={hidePersonLink}>
                <img src={team.photo} className='rounded-full w-48 border p-4' />
                <h1 className='mt-2 md:mt-6 text-xl text-indigo-900'>{team.Name}</h1>
                <h1 className='text-gray-500 mt-2'>{team.designation}</h1>
                <div className={`h-1`}>
                  <div className={`overflow-hidden transition-all ease-in-out duration-500 flex gap-4 items-center ${showLink === index ? 'h-16 opacity-100': 'h-0 opacity-0'}`}>
                    <span className='text-indigo-900 rounded-full border p-1'><RiFacebookFill/></span>
                    <span className='text-indigo-900 rounded-full border p-1'><CiInstagram/></span>
                    <span className='text-indigo-900 rounded-full border p-1'><CiLinkedin/></span>
                    <span className='text-indigo-900 rounded-full border p-1'><FaTwitter/></span>
                  </div>
                </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default TeamMate