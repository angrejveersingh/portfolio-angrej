'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion"

type Inputs = {
  name: string,
  email: string,
  subject:string,
  message: string
};

type Props = {}

export default function Header({}: Props) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:asingh6400@gmail.com`;
    };
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5,
      }}
      className='flex, flex-row items-center' >
        <SocialIcon
          url="https://linkedin.com//in/angrej-singh"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/angrejveersingh?tab=repositories"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>


      <motion.div 
       initial={{
        x:500,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5,
      }}
      onClick={handleSubmit(onSubmit)}
      className='flex flex-row items-center text-gray-300 cursor-pointer uppercase'>
        <SocialIcon
        className='cursor-pointer '
        network='email'
        fgColor='gray'
        bgColor='transparent'
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
      </motion.div>
    </header>
  );
}