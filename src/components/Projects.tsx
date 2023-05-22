"use client"
import React,{ useState, useCallback, useEffect }  from 'react'
import { motion } from "framer-motion"


const useMediaQuery = (width: any) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e: { matches: any; }) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

type Props = {}

export default function Projects({}: Props) {
    const isBreakpoint = useMediaQuery(768);
    const projects =[
        {
            name:"Spotify shorts App",
            image:"/spotify.png",
            description:"Developed the cross platform app using the spotify API. Users can login using the spotify account and they do not need the seperate account. After login, users can play the music previews on the song in 4 different languages and add to their spotify playlist. Also, users can search any song present on the spotify database. This app comes with the light and dark mode."
        },
        {
            name:"EMS app for cross platform",
            image:"/diligent-logo.png",
            description:"Developed the app for the employees of the diligent security company. This app was developed with react-native and firebase as backend. In this app all the employees can login with their login details and can choose the location of their work before they clockin. After they clockin, employees can enter their daily occurrence report on it and can edit it. In this app they can reset the password and this app also store the location of the employees."
        },
        {
            name:"Weather app for IOS users",
            image:"/weatherApp.png",
            description:"Developed the IOS weather app using the weather API. Used the XCode and swift to develop the app. This app shows the weather details of user's current location and users can also search for the weather details of different locations of world. I developed this app for my learning while I was studing in the college."
        },
        {
            name:"Wordle game for IOS users",
            image:"/wordle.png",
            description:"Wordle game in XCode with the swift language with custom keyboard. In this game user will have 5 chances to guess the word and if user guess the letter right and at right then that letter will get the colour green. If user guess the letter right but at wrong place, then that letter will get the colour orange. Also, if the entered letters are not present in the word, then letter will get the colour gray. "
        },
        
    ]
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full top-16 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project,i)=>(
                <div key={project.name} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    
                    { isBreakpoint ? (<img
                   
                        src={project.image}
                        alt=""
                        className={project.image=="/diligent-logo.png"?' w-40 h-24 md:w-46 md:h-24 xl:w-52 xl:h-28':' w-40 h-40 md:w-48 md:h-48 xl:w-52 xl:h-52'}
                    />):(<motion.img
                        initial={{
                            y:-300,
                            opacity:0
                        }}
                        transition={{duration:1.2}}
                        whileInView={{
                            opacity:1,
                            y:0
                        }}
                        viewport={{once:true}}
                            src={project.image}
                            alt=""
                            className={project.image=="/diligent-logo.png"?' w-40 h-24 md:w-46 md:h-24 xl:w-52 xl:h-28':' w-40 h-40 md:w-48 md:h-48 xl:w-52 xl:h-52'}
                        />)}
                    
                    

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl md:text-4xl xl:text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>{project.name}</span> 
                            
                        </h4>

                        <p className='text-sm md:text-base xl:text-lg text-center md:text-left'>
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}

        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
       
    </motion.div>
  )
}