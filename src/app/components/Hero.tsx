"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Man1 from '../asset/man1.jpg'
import Lady2 from '../asset/lady2.jpg'
import { FaArrowRight, FaPlay, FaRegCircleDot } from 'react-icons/fa6'

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
  const texts = ["Saas", "Business", "Agency", "Start up"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className='bg-heroBackground sm:flex md:flex justify-between p-8 gap-4'>
        <div className='w-full gap-4 p-4'>
            <button className='flex items-center gap-2 bg-slate-500 p-4 rounded-xl mt-8'>
                <FaRegCircleDot/>
                <p>Tailwind Template for Startups</p>
            </button>
            <p className='text-2xl sm:3xl md:4xl lg:text-4xl text-white mt-8 font-bold'>Digital Solutions for</p>
            <p className='text-2xl sm:3xl md:4xl lg:text-4xl text-white-600 font-bold'>Your {texts[textIndex]}</p>
            <p className='mt-8'>Handcrafted Tailwind CSS template for your next - Startup, Business, Agency or SaaS Website. Comes with refreshing design and everything you need to kickstart your next web project.</p>
            
            <div className='flex mt-8 gap-8'>
            <button className='flex items-center bg-blue-600 p-4 rounded gap-2'>
                <p>Get Started</p>
                <FaArrowRight/>
            </button>
            <button className='flex items-center gap-2'>
                    <FaPlay/>
                    How it Work
            </button>
            </div>
        </div>

        <div className='w-full border-l-green-800 border relative'>
            <div className='pl-4'>
            <Image
                src={Man1}
                alt="Woman working on laptop"
                // width={500}
                // height={500}
                className="rounded-lg"
            />
            </div>
            
            <div className='absolute top-36 left-0 bg-white pr-8 pt-8 h-52'>
            <Image
                src={Lady2}
                alt="Woman working on laptop"
                width={350}
                height={700}
                className="rounded-lg"
            />  
            </div>
        </div>
    </div>
  )
}

export default Hero
