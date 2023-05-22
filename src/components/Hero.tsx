'use client'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text,count]= useTypewriter({
        words:[
            "Hello, I am Angrej veer Singh",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop:true,
        delaySpeed:2000
    });
  return (
    <div style={{scrollBehavior:'smooth'}} className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src='./IMG6.jpg' alt='Angrej Image'/>

        <div className='z-20'>
            <h2 className='text-xs xl:text-sm md:text-sm  uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px] xl:tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-xl md:text-3xl xl:text-3xl lg:text-4xl font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A'></Cursor>
        </h1>

        <div className='pt-5 invisible md:visible xl:visible'>
            {/* <Link href="#about" prefetch={false}> */}
            <a href="#about" className='heroButtonClass'>About</a>
            {/* </Link> */}
            
            {/* <Link href="#experience"> */}
            <a  href='#experience' className='heroButtonClass'>Experience</a>
            {/* </Link> */}

            {/* <Link href="#skills"> */}
            <a href='#skills' className='heroButtonClass'>Skills</a>
            {/* </Link> */}

            {/* <Link href="#projects"> */}
            <a href='#projects' className='heroButtonClass'>Projects</a>
            {/* </Link> */}

            {/* <Link href="#projects"> */}
            <a href='#contact' className='heroButtonClass'>Contact</a>
            {/* </Link> */}
           
            
            
        </div>
        </div>
    </div>
  )
}