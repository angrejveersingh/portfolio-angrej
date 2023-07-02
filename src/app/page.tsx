import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Education from '@/components/Education'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div  className='h-screen relative scroll-smooth snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 text-white md:scrollbar  md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80 xl:scrollbar xl:scrollbar-track-gray-400/20 xl:scrollbar-thumb-[#F7AB0A]/80'>
      <div>
        <title>Buttar&apos;s portfolio</title>
      </div>


      {/* Header */}
    <div className='top-0 sticky'>
      <Header></Header>
      </div>

      {/* Hero */}

      <section id="hero" className='snap-center'>
        <Hero></Hero>
      </section>

      {/* About */}
      <div id="about" className='snap-center'>
        <About/>
      </div>

      {/* Education */}
      <section id='education' className='snap-center h-[100%]'>
         <Education/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience/>

      </section>

      {/* Skills */}

      <section id='skills' className='snap-center'>
        <Skills/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
         <Projects/>
      </section>
      

      {/* Contact Me */}
      <section id='contact' className='snap-center h-[99.5%] top-0'>
        <ContactMe/>
      </section>


    </div>
  )
}
