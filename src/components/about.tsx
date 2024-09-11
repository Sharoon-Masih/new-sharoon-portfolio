import React from 'react'
import { TracingBeam } from './ui/tracingBeam'
import Image from 'next/image'

const About = () => {
   return (
      <div className='p-2 md:mx-10 xl:mx-0 my-[100px] lg:my-[150px] h-full '>
         <TracingBeam className='flex justify-between items-center flex-col lg:flex-row  w-full  '>
            {/* <h1 className='text-4xl md:text-7xl font-medium tracking-tight'>About</h1> */}
            <div className='flex justify-between items-center w-[100%] flex-col lg:flex-row gap-4 md:gap-6'>
               <div className='flex flex-col justify-between items-center lg:items-start gap-4 md:gap-6   py-6 p-2'>
                  <h1 className='text-4xl md:text-7xl text-gray-100 font-semibold'>Sharoon</h1>
                  <h2 className='text-4xl md:text-7xl text-gray-100 lg:pl-[120px] font-semibold'>Masih</h2>
                  <span className='text-center lg:text-start max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[700px] lg:pl-[300px] flex flex-col gap-4 items-center justify-between antialiased p-4 '>
                     <p className='text-base md:text-lg lg:text-base text-gray-200 antialiased'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis cumque at ducimus nemo fugiat saepe necessitatibus maiores iure accusantium accusamus?</p>
                     <p className='text-base md:text-lg lg:text-base text-gray-200 antialiased'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis cumque at ducimus nemo fugiat saepe necessitatibus maiores iure accusantium accusamus?</p>
                  </span>
               </div>
               <div className='relative w-full h-96  sm:w-96 sm:h-96'>
                  <Image src={"/dp.jpg"} alt='myPic' fill={true} className='' />
               </div>
            </div>
            <div className='flex flex-col items-center justify-between gap-6 py-8 p-2'>
               <h1 className='text-4xl md:text-7xl text-gray-100 font-medium'>My Dreams</h1>
               <span className='text-gray-200 antialiased text-center lg:text-start max-w-[280px] sm:max-w-[500px] md:max-w-full text-base md:text-lg p-4  '><p>In my dreams for my portfolio website, I have big goals. First up, I really want to become super skilled in web development. Picture me as an expert, weaving digital magic with every click and tap, creating websites and apps that really stand out. <br /><br />

                  But that&apos;s just the start. Once I&apos;ve got that down, I&apos;ve got my sights set on something even bigger: starting my own business. I want to dive into the world of startups, where creativity and innovation rule the day. With my web development skills as my foundation, I&apos;m excited to see where my entrepreneurial journey takes me. <br /><br />

                  And it doesn&apos;t stop there. I&apos;m also super curious about artificial intelligence and blockchain technology. These cutting-edge fields have so much potential to change the game, and I want to be right in the thick of it. So, I&apos;m planning to dive deep into AI and blockchain, learning everything I can and using that knowledge to drive innovation and shake things up. <br /><br />

                  In my mind, each step toward these goals is like adding a piece to a puzzle. And when it all comes together, I&apos;ll have created something truly special—a portfolio website that reflects not just my skills and experience, but also my passion for pushing boundaries and making a real impact in the world of tech and business.</p></span>

            </div>

         </TracingBeam>
      </div>
   )
}

export default About
