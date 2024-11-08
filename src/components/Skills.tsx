"use client"
import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{ once: true }}
    transition={{duration:1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] justify-center xl:space-y-0 mx-auto items-center min-h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current proficiency
        </h3>

        <div className='grid absolute top-56 grid-cols-4 gap-5'>
            <Skill/>

        </div>
    </motion.div>
  )
}