"use client"
import React, { useRef, useState }  from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';

type Inputs = {
  name: string,
  email: string,
  subject:string,
  message: string
};

type Props = {}

export default function ContactMe({}: Props) {
    const form = useRef();
    const [sentEmail, setSentEmail] = useState(0);

    const sendEmail = (e:any) => {
        setSentEmail(1);
        e.preventDefault();
    
        emailjs.sendForm('service_1ax5sgh', 'template_9cqyrjk', e.target, 'GKBQ4rgl_V94HGFcA')
          .then((result) => {
              console.log(form.current);
          }, (error) => {
              console.log(error.text);
          });
      };
    // const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    // const onSubmit: SubmitHandler<Inputs> = (formData) => {
    //     window.location.href = `mailto:asingh6400@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}. My email is ${formData.email}`;
    // };  
  return (
    <div  className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
        </h3>

        <div className='flex absolute top-36 flex-col space-y-10'>
            <h4 className='text-lg md:text-4xl xl:text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-5 w-5 md:w-7 md:h-7 xl:h-7  xl:w-7  animate-pulse'/>
                <p className='text-lg md:text-2xl xl:text-2xl'>+14372564004</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 md:w-7 md:h-7 xl:h-7  xl:w-7 animate-pulse'/>
                <p className='text-lg md:text-2xl xl:text-2xl'>asingh6400@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-5 w-5 md:w-7 md:h-7 xl:h-7  xl:w-7 animate-pulse'/>
                <p className='text-lg md:text-2xl xl:text-2xl'>Brampton, Ontario</p>
                </div>

                
                
            </div>
           
            {sentEmail == 0 ?  <form  onSubmit={sendEmail} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input required placeholder="Name" className="contactInput w-40 md:w-[270px] md:h-[57px] xl:w-[270px] xl:h-[57px]"  type='text' name="form_name"/>
                    <input required placeholder="Email" className="contactInput w-40 md:w-[270px] md:h-[57px] xl:w-[270px] xl:h-[57px]" type='email' name="form_email"/>
                </div>

                <input required placeholder="Subject"  className="contactInput" type='text' name="form_subject"/>
                <textarea required placeholder='Message' className="contactInput" name="message"/>
                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form> : <p className='text-3xl md:text-4xl xl:text-4xl font-semibold text-center'>Thank you for contacting</p>}
        </div>
        
    </div>
  )
}
