"use client"
import React from 'react'
import { motion } from "framer-motion"
import styles from "../components/css/smallScreen.module.css"


type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{once:true}}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hiden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 
      className={`${styles.education} absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl`}>
        Education
      </h3>

      <div
       
        className={`w-full  flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ${styles.educationSection}`}
      >
        {/* <EducationCard/> */}

        <ol className="top-6 relative items-center flex-row sm:flex ">
          <motion.li 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 1.5 }}
          className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#F7AB0A]/80 rounded-full ring-0 ring-white dark:bg-[#F7AB0A] sm:ring-8 dark:ring-yellow-900 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 bg-[#F7AB0A]/90 dark:bg-[#F7AB0A]/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{once:true}}
              transition={{ duration: 1.5,delay: 1 }}
              className="hidden sm:flex w-full bg-[#F7AB0A]/50 h-0.5 dark:bg-[#F7AB0A]/40"></motion.div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h2 className="text-lg font-semibold text-white">
                University Of Southern Queensland
              </h2>
              <h4 className=" text-base font-semibold text-slate-200">
                Bachelor of Information Technology
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March, 2016 - July, 2019
              </time>
              <p className="text-base hidden  md:flex xl:flex font-normal text-gray-500 dark:text-gray-400">
                Learnt about the web development, oop concept and basic concepts of networking
              </p>
            </div>
          </motion.li>
          <motion.li 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 1.5,delay: 2 }}
          
          className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#F7AB0A]/80 rounded-full ring-0 ring-white dark:bg-[#F7AB0A] sm:ring-8 dark:ring-yellow-900 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 bg-[#F7AB0A]/90 dark:bg-[#F7AB0A]/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{once:true}}
              transition={{ duration: 1.5,delay: 3  }}
              className="hidden sm:flex w-full bg-[#F7AB0A]/50 h-0.5 dark:bg-[#F7AB0A]/40"></motion.div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h2 className="text-lg font-semibold text-white">
                Indus Institute
              </h2>
              <h4 className="text-base font-semibold text-slate-200">
                Professional year
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                October, 2019 - October, 2020
              </time>
              <p className="text-base hidden  md:flex xl:flex  font-normal text-gray-500 dark:text-gray-400">
                Learnt about the office culture and ethics of work environment
              </p>
            </div>
          </motion.li>
          <motion.li 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 1.5,delay: 4  }}
          className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-[#F7AB0A]/80 rounded-full ring-0 ring-white dark:bg-[#F7AB0A] sm:ring-8 dark:ring-yellow-900 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 bg-[#F7AB0A]/90 dark:bg-[#F7AB0A]/80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{once:true}}
              transition={{ duration: 1.5,delay: 5  }}
              className="hidden sm:flex w-full  bg-[#F7AB0A]/50 h-0.5 dark:bg-[#F7AB0A]/40"></motion.div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h2 className="text-lg font-semibold text-white">
                Fanshawe College
              </h2>
              <h4 className="text-base font-semibold text-slate-200">
                Mobile Application Development
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                January, 2022 - April, 2023
              </time>
              <p className="text-base hidden  md:flex xl:flex font-normal text-gray-500 dark:text-gray-400">
                Learnt mobile application development with different technologies
              </p>
            </div>
          </motion.li>
        </ol>
      </div>
    </motion.div>
  );
}
