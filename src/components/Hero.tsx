'use client'
import Image from 'next/image'
import React from 'react'
import CounterBox from './shared/counterBox'
import {motion} from 'framer-motion'
import Typewriter from './shared/typewriter'

const Info = [
    {
        text: "Months of Experience",
        totalCount: 10,
    },
    {
        text: "Complete Project",
        totalCount: 15,
    },
    {
        text: "Client",
        totalCount: 2,
    },
]
const Hero = () => {
    return (
        
        <motion.div
        animate={{opacity:1}}
        // animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 100, duration:0.5 }}
        initial={{opacity:0}}
        // transition={{duration:0.3,type:'tween',ease:'easeIn'}} 
        className="w-full flex flex-col gap-10 sm:gap-20 items-center justify-between lg:flex-row lg:items-start lg:gap-0">
                {/* brief intro */}
                <div className="flex flex-col box-border items-start relative z-[5] sm:items-center sm:px-0 lg:items-start lg:mt-[60px] ">
                    <p className="text-[#868490] text-[45px] md:text-[47px] lg:text-[40px] font-semibold">JamStack Devloper</p>
                    <Typewriter words={['Sharoon Masih','ChatGpt Dev','AI Enthusiast','Co-Founder']} typeSpeed={100} deleteNum={50} loop={false} className='h-[120px]'/>
                    <span className='mt-[50px] sm:mt-[30px] w-[183px] h-[8px] bg-[#F8E7A1] '></span>
                    <p className='font-medium text-[20px] text-[#868490] mt-[25px] sm:px-3 sm:text-center lg:w-[387px] lg:h-[216px] lg:text-start lg:px-0'>Eget malesuada tortor ut sed. Tincidunt viverra malesuada nisl vehicula vestibulum. Ut blandit fermentum, cursus nulla. Imperdiet neque mi convallis quis interdum sagittis.</p>
                </div>
                {/* Dp at large screen */}
                <div className='z-0 absolute  hidden lg:block lg:left-[45%] xl:left-[40%] lg:mt-[30px]'>
                    <div className=" rounded-md relative overflow-hidden md:w-[390px] md:h-[600px] xl:w-[500px] xl:h-[700px]">
                        <Image src={'/dp.jpg'} alt="Dp" fill priority />
                    </div>
                </div>
                {/* Dp at mobile/tab screen */}
                <div className="z-10 rounded-md relative overflow-hidden h-[450px] w-[300px] sm:w-[350px] sm:h-[500px] md:w-[390px] md:h-[600px] lg:hidden px-4 sm:px-0">
                    <Image src={'/dp.jpg'} alt="Dp" fill priority />
                </div>
                {/* experience, project, client (section) */}
                <div className='flex flex-col z-10 sm:gap-20 sm:flex-row justify-center items-center  box-border  lg:flex-col lg:gap-[90px] '>
                    {Info.map((content) => <CounterBox text={content.text} totalCount={content.totalCount} className='items-center gap-2' key={content.text}/>)}
                </div>
            </motion.div>
    )
}

export default Hero
