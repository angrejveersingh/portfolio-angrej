"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css'
// import { Tooltip } from 'react-tooltip'



type Props = {
    directionLeft?:boolean;
};

export default function Skill({directionLeft}: Props) {

    const skills = [
        {
            name:"react.js/react-native",
            image:"/reactLogo.png",
            level:"95%"
        },
        {
            name:"next.js",
            image:"/next.png",
            level:"80%"
        },
        {
            name:"Firebase",
            image:"/firebase.png",
            level:"90%"
        },
        {
            name:"MongoDB",
            image:"/MongoDB.png",
            level:"80%"
        },
        {
            name:"HTML",
            image:"/htmlLogo.png",
            level:"95%"
        },
        {
            name:"CSS",
            image:"/cssLogo.png",
            level:"95%"
        },
        {
            name:"JavaScript",
            image:"/jsLogo.jpg",
            level:"95%"
        },
        {
            name:"Wordpress",
            image:"/wordpress.jpeg",
            level:"95%"
        },
        {
            name:"neto",
            image:"/netoLogo.png",
            level:"75%"
        },
        {
            name:"Tailwind",
            image:"/tailwind-logo.png",
            level:"75%"
        },
        {
            name:"Kotlin",
            image:"/kotlin.png",
            level:"80%"
        },
        {
            name:"Swift",
            image:"/swift.png",
            level:"80%"
        },
        {
            name:"Java",
            image:"/java.jpeg",
            level:"85%"
        },

    ]


  return (
    <>
    {skills.map((skill)=>(
        <div key={skill.name} className='group relative flex cursor-pointer'>
           
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity:0, 
        }}
        transition={{duration:1}}
        viewport={{ once: true }}
        whileInView={{opacity:1, x:0}}
        src={skill.image}
        className='rounded-full border bg-[#000] border-gray-500 object-fit w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        
        />
        

        <div data-tooltip-id={skill.name}  className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xll font-bold text-black opacity-100'>{skill.level}</p>
            </div>
        </div>
        <Tooltip style={{backgroundColor:"white", color:"black"}} id={skill.name} place="top">
             {skill.name}
        </Tooltip>
    </div>
    
    ))}
    
    </>
  )
}