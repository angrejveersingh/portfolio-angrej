"use client"
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {

const cards = [
    {
        companyImage:"/lambdadevs.png",
        companyName:"Lambdadevs Inc.",
        tittle:"Web Developer",
        images:["/reactLogo.png","/next.png", "/htmlLogo.png","/jsLogo.jpg", "/cssLogo.png" ],
        workTime:"Feb, 2022 - Present",
        descriptions:[
            "Managed the overall planning, execution, and delivery of several concurrent projects",
            "Performed tests and fixed technical errors",
            "Prepared technical documentation and reports for internal and external stakeholders",
            "Develop suggestions for changes and improvements for ongoing projects",
            "Contributed to the development and shared project management best practices within the company"
        ]
    },
    {

      companyImage:"/brighteyes.png",
      companyName:"Bright Eyes",
      tittle:"Web Developer",
      images:["/netoLogo.png","/htmlLogo.png","/jsLogo.jpg", "/cssLogo.png" ],
      workTime:"October, 2020 - December, 2021",
      descriptions:[
          "Updated the invoice system of company",
          "Performed tests and fixed technical errors",
          "Modified the reports using the java script",
          "Develop suggestions for changes and improvements for ongoing projects",
          "Updated the retail website of the company",
          "Helped other staff members with technical issues"
      ]
  },
    {

        companyImage:"/brighteyes.png",
        companyName:"Bright Eyes (Internship)",
        tittle:"Web Developer",
        images:["/netoLogo.png","/htmlLogo.png","/jsLogo.jpg", "/cssLogo.png" ],
        workTime:"July, 2020 - October, 2020",
        descriptions:[
            "Developed the new website for the wholesale customers of company",
            "Performed tests and fixed technical errors",
            "Modified the reports using the java script",
            "Develop suggestions for changes and improvements for ongoing projects",
            "Updated the retail website of the company"
        ]
    },
    {

        companyImage:"/KSPK.png",
        companyName:"KSPK PTY LTD",
        tittle:"IT help desk",
        images:["/microsoft.webp" ],
        workTime:"July, 2019 - June, 2020",
        descriptions:[
            "Understood customer needs and recommended the effective solutions to suit their needs",
            "Identified and resolved client concerns",
            "Resolved service problems by clarifying the customer's complaint, determined the cause of the problem, and explained the best solution to solve the problem",
            "Contributed to teamwork by motivating team members to excel in roles",
            "Invoice handling and Managing company data"
        ]
    }

]





  return (
   <>

        {cards.map((card)=>(
            <article key={card.companyName} className="flex flex-col  rounded-lg items-center space-y-7 flex-shrink-0 h-[100%] w-[350px] md:w-[600px] xl:w-[800px] xl:h-[580px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
       
       <div>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" w-[80px] h-[80px]  rounded-full  xl:w-[150px] xl:h-[150px] bg-[#000] object-scale-down  object-center"
        src= {card.companyImage}
        alt="Company Logo"
      />
      </div>



      <div className="px-0 md:px-10">
        <h4 className="text-lg md:text-xl xl:text-xl font-light">{card.tittle}</h4>
        <p className="font-bold text-sm md:text-2xl xl:text-2xl mt-1">{card.companyName}</p>
        <div className="flex space-x-2 my-2">
            {card.images.map((img)=>(
                <img
                key={img}
                className=" h-8 w-8 md:h-12 md:w-12 xl:h-12 xl:w-12 rounded-full object-contain object-center"
                src= {img}
                alt="next image"
              />
            ))}
          
          {/* <img
            className="h-16 w-16 rounded-full object-contain object-center"
            src="/reactLogo.png"
            alt="next image"
          />
          <img
            className="h-14 w-14 rounded-full object-contain object-center"
            src="/next.png"
            alt="next image"
          /> */}
        </div>
        <p className='text-sm md:text-lg xl:text-lg'>{card.workTime}</p>
        <ul className="list-disc text-xs md:text-sm xl:text-sm space-y-2 md:space-y-4 xl:space-y-4 ml-5 ">
        {card.descriptions.map((description)=>(
             
             <li key={description}>
               {description}
             </li>
            
           
        ))}
        </ul>
       
      </div>
      </article>
       ))}
    </>
  );
}