"use client";
import React from 'react'
import Logo from '../asset/s-logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  
  const pathname = usePathname();
  
  return (
    <div className='flex items-center justify-between mt-4'>
        <div className='flex items-center ml-4'>
            <div>
                <Image
              src={Logo} alt='Startup Logo' width={50} height={50}
                />
            </div>
            <p className='text-4xl'>GoStartup</p>
        </div>

        <div className='sm:flex md:flex items-center space-x-4 hidden'>
            <Link href="/pages/home" className={pathname === "/pages/home" ? "hover:text-white mr-4 text-blue-500 font-bold":"hover:text-white font-bold mr-4 text-gray-400" }>
                Home
            </Link>
            <Link href="/pages/features" className={pathname === "/pages/features" ? "hover:text-white mr-4 text-blue-500 font-bold":"hover:text-white font-bold mr-4 text-gray-400" }>
                Features
            </Link>
            <Link href="/pages/pages" className={pathname === "/pages/pages" ? "hover:text-white mr-4 text-blue-500 font-bold":"hover:text-white font-bold mr-4 text-gray-400" }>
            <div className='flex items-center gap-2'>
                <p>Pages</p>
                <IoIosArrowDown/>
{/* start */}
{/* <div className="absolute hidden bg-white text-black shadow-lg rounded-md mt-2 group-hover:block">
    <ul className="py-2">
      <li>
        <Link
          href="/pages/blog-grids"
          className="block px-4 py-2 hover:bg-gray-200"
        >
          Blog Grids
        </Link>
      </li>
      <li>
        <Link
          href="/pages/blog-details"
          className="block px-4 py-2 hover:bg-gray-200"
        >
          Blog Details
        </Link>
      </li>
      <li>
        <Link
          href="/pages/404-error"
          className="block px-4 py-2 hover:bg-gray-200"
        >
          404 Error
        </Link>
      </li>
      <li>
        <Link
          href="/pages/sign-in"
          className="block px-4 py-2 hover:bg-gray-200"
        >
          Sign In
        </Link>
      </li>
      <li>
        <Link
          href="/pages/sign-up"
          className="block px-4 py-2 hover:bg-gray-200"
        >
          Sign Up
        </Link>
      </li>
    </ul>
  </div> */}
{/* end */}
                
            </div>
            </Link>
            <Link href="/pages/support" className={pathname === "/pages/support" ? "hover:text-white mr-4 text-blue-500 font-bold":"hover:text-white font-bold mr-4 text-gray-400" }>
                Support
            </Link>
        </div>

        {/* <div className='flex items-center gap-4 mr-8'>
            <button className='bg-customBlueOne p-2 rounded'>Sign In</button>
            <button className='bg-gray-600 p-2 rounded'>Sign Up</button>
            <IoSunnyOutline size={30}/>
        </div> */}
        <div className='flex items-center gap-4 mr-8'>
            <button className='hidden md:block bg-customBlueOne p-2 rounded'>Sign In</button>
            <button className='hidden md:block bg-gray-600 p-2 rounded'>Sign Up</button>
        <IoSunnyOutline size={30} />
        </div>
    </div>
  )
}

export default Header