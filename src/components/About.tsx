'use client'
import React from 'react'
import { motion } from "framer-motion"
import styles from "../components/css/smallScreen.module.css"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 ml-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{once:true}}
        src="/image1.jpg"
        width={350}
        height={400}
        alt="Author image"
        className="-mb-20 md:mb-0 w-36 h-36 flex-shrink-0 mt-10 rounded-full object-cover md:rounded-lg md:w-72 md:h-72 xl:w-[350px] xl:h-[450px]"
      />

      <div className="space-y-10 px-10 md:px-10">
        <h4 className={`${styles.headingAbout} text-2xl md:text-2xl xl:text-4xl font-semibold`}>
          Brief Introduction of <span className="underline decoration-[#F7AB0A]/50">Angrej veer Singh</span>
        </h4>
        <p className={`${styles.aboutText} text-sm`}>
          Possess a solid understanding of computer fundamentals. Reliable,
          accurate, and consistent in carrying out duties until they are
          completed successfully. Excel in planning, forecasting, establishing
          goals, and choosing a path of action. Demonstrate a remarkable
          capacity for learning new techniques. Energy and enthusiasm when
          carrying out daily tasks.
        </p>
      </div>
    </motion.div>
  );
}