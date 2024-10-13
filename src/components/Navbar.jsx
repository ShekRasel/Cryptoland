import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { NavLink,Link } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
    const [bgColor,setBgColor] = useState(false);
    const [hamBurger, setHamBurger] = useState(false);
    const [pagesDiv, setPagesDiv] = useState(false);
    const [blogDiv, setBlogDiv] = useState(false);



    const showHidePagesDiv = ()=>{
        setPagesDiv(!pagesDiv);
    }
    const showHideBlogDiv = ()=>{
        setBlogDiv(!blogDiv);
    }

    const changeHamAndShowMenu = ()=>{
        setHamBurger(!hamBurger);
    }
    
    const changeBgColor = ()=>{

        if(window.scrollY > 10){
            setBgColor(true);
        }else{
            setBgColor(false);
        }
    }

    window.addEventListener('scroll',changeBgColor);

  return (
    <nav className={`  font-semibold fixed w-full z-50 `} id='nav'>
        
        <div className= {` px-3 md:px-8 lg:px-12 xl:px-16 2xl:px-72 py-4 lg:py-0 shadow-md ${bgColor ? 'bg-white transition-all duration-500 z-50 ease-out text-indigo-800 w-full':'transition-all duration-500 ease-out text-white w-full'} w-full`}>

            <div className='flex justify-between items-center'>
                <div className=''>
                    <Link to={'/'}>
                        <img src={bgColor ? 'logo/logo.svg' : 'logo/white-logo.svg'}  className='h-9'/>
                    </Link>
                    
                </div>
                {/*larger Screen nav start*/}
                <div className='hidden lg:block'>
                    <ul className='flex gap-10 items-center'>
                        <li>
                            <NavLink 
                                to={'/'}
                                className={({isActive}) => isActive ? 'text-blue-500 font-extrabold':''}
                                >Home</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'about'}
                                className={({isActive}) => isActive ? 'text-blue-500 font-extrabold':''}
                                >About</NavLink>
                        </li>

                        <li onMouseEnter={showHidePagesDiv} onMouseLeave={showHidePagesDiv} className=''>
                            <div className='py-8'>
                                <h1 className=' cursor-pointer'>Pages</h1>
                                {pagesDiv ? 
                                    <div className='mt-3 absolute pt-4 shadow-lg'>
                                        <div className={` rounded-md bg-white transition-all ease-out duration-500 delay-1000 ${pagesDiv ? ' translate-y-0 opacity-100':' -translate-y-5 opacity-0'}`}>
                                            <ul className='text-gray-500  font-semibold flex flex-col gap-4 py-4 pr-20 pl-10'>
                                                <li className='hover:text-indigo-700'><Link to={'about'}>About Us</Link></li>
                                                <li className='hover:text-indigo-700'><Link to={'signin'}>Sign In</Link></li>
                                                <li className='hover:text-indigo-700'><Link to={'signup'}>Sign UP</Link></li>
                                                <li className='hover:text-indigo-700'><Link to={'passwordReset'}>Reset Password</Link></li>
                                                <li className='hover:text-indigo-700'><Link to={'mailSusscess'}>Mail Sussess</Link></li>
                                                <li className='hover:text-indigo-700'><Link to={'errorPage'}>404 Error</Link></li>
                                            </ul>
                                        </div>
                                    </div>:
                                    ''    
                                }
                            </div>
                        </li>
                            
                    
                        <li onMouseEnter={showHideBlogDiv} onMouseLeave={showHideBlogDiv}>
                        <div className=' py-8'>
                                <h1 className='cursor-pointer'>Blog</h1>
                                {blogDiv ? 
                                    <div className='absolute mt-3 pt-4'>
                                        <div className={` overflow-hidden rounded-md bg-white transition-all ease-out duration-500 shadow-lg ${blogDiv ? 'max-h-96':'max-h-0'}`}>
                                            <ul className='text-gray-500  font-semibold flex flex-col gap-4 py-4 pr-20 pl-10'>
                                                <li className='hover:text-indigo-700'><Link to={'blogGrid'}>Blog Grid</Link></li>
                                                <li className='hover:text-indigo-700'><Link to={'singleBlog'}>Blog Single</Link></li>
                                            </ul>
                                        </div>
                                    </div>:
                                    ''    
                                }
                            </div>

                        </li>
                        <li>
                            <NavLink 
                                className={({isActive})=>isActive ? 'text-blue-500 font-extrabold':''}
                                to={'contact'}>Contact</NavLink>
                        </li>

                    </ul>
                   
            
                </div>
                {/*larger Screen nav end*/}

                <div className='lg:hidden' onClick={changeHamAndShowMenu}>
                    <span className='text-3xl'>
                        {hamBurger ? <TfiClose /> : <FaBars className=''/>}
                    </span>
                </div>

                <div className='hidden md:block'>
                    <button className={` text-indigo-500 px-8 py-3 rounded-full border hover:bg-blue-500 transition-all ease-out duration-500 hover:text-white ${bgColor ? 'bg-blue-500 text-white transition-all ease-out duration-500 hover:bg-indigo-800': 'transition-all ease-out duration-500 bg-white'}`}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
        
        {/*mobile and tab Screen nav start*/}
        <div className='px-3 md:px-8 '>
        <div className={`px-3 md:px-8 mt-1  bg-white rounded-md  lg:hidden overflow-y-scroll  ease-out transition-all duration-500 ${hamBurger ? 'max-h-96':'max-h-0'}`}>
                <ul className='flex flex-col gap-6 w-full py-4'>
                <li>
                            <NavLink 
                                to={'/'}
                                className={({isActive}) => isActive ? 'text-blue-500 font-extrabold':''}
                                onClick={changeHamAndShowMenu}
                                >Home</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={'about'}
                                className={({isActive}) => isActive ? 'text-blue-500 font-extrabold':''}
                                 onClick={changeHamAndShowMenu} 
                                >About</NavLink>
                        </li>
                        <li className='cursor-pointer' onClick={showHidePagesDiv}>
                               <div className='flex items-center w-full justify-between'>
                                    <h1 >Pages</h1> <MdKeyboardArrowDown className={`text-xl transition-all ease-out duration-500 ${pagesDiv ? 'rotate-180':''}`}/>
                               </div>

                               <div className={` overflow-hidden transition-all ease-out duration-500 ${pagesDiv ? 'max-h-96':'max-h-0'}`}>
                                    <ul className='text-gray-500  font-semibold flex flex-col gap-4 py-4 pr-20 pl-10'>
                                        <li  onClick={changeHamAndShowMenu} className='hover:text-indigo-700'><Link to={'about'}>About Us</Link></li>
                                        <li  onClick={changeHamAndShowMenu} className='hover:text-indigo-700'><Link to={'signin'}>Sign In</Link></li>
                                        <li onClick={changeHamAndShowMenu} className='hover:text-indigo-700'><Link to={'signup'}>Sign UP</Link></li>
                                        <li  onClick={changeHamAndShowMenu} className='hover:text-indigo-700'><Link to={'passwordReset'}>Reset Password</Link></li>
                                        <li  onClick={changeHamAndShowMenu} className='hover:text-indigo-700'><Link to={'mailSusscess'}>Mail Sussess</Link></li>
                                        <li  onClick={changeHamAndShowMenu} className='hover:text-indigo-700'><Link to={'errorPage'}>404 Error</Link></li>
                                    </ul>
                               </div>
                        </li>
                        <li className='cursor-pointer' onClick={showHideBlogDiv}>
                            <div className='flex items-center w-full justify-between'>
                                <h1 >Blogs</h1> <MdKeyboardArrowDown className={`text-xl transition-all ease-out duration-500 ${blogDiv ? 'rotate-180':''}`}/>
                            </div>
                            <div className={` overflow-hidden transition-all ease-out duration-500 ${blogDiv ? 'max-h-96':'max-h-0'}`}>
                                <ul className='text-gray-500  font-semibold flex flex-col gap-4 py-4 pr-20 pl-10'>
                                    <li  onClick={changeHamAndShowMenu} className='hover:text-indigo-700'><Link to={'blogGrid'}>Blog Grid</Link></li>
                                    <li  onClick={changeHamAndShowMenu} className='hover:text-indigo-700'><Link to={'singleBlog'}>Blog Single</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li
                            onClick={changeHamAndShowMenu}
                        >
                            <NavLink 
                                className={({isActive})=>isActive ? 'text-blue-500 font-extrabold':''}
                                to={'contact'}>Contact</NavLink>  
                        </li>

                </ul>
            </div>
        </div>
        {/*mobile and tab Screen nav end*/}
    </nav>
  );
};

export default Navbar