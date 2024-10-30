'use client'
import Workcard from '@/components/shared/work-card'
import { LampContainer } from '@/components/ui/lamp'
import { Projects } from '@/constants'
import React from 'react'
import { motion } from 'framer-motion'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete Portfolio',
  description: "Hey, I'm Sharoon, a seasoned web developer with a passion for Blockchain and AI technologies. Alongside my expertise, I co-founded and currently lead Techverse51, a vibrant community initiative. Over the months, I've spearheaded numerous projects, with standout examples featured in the project section below. Let's connect and explore how we can innovate together.",
};

const CompletePortfolio = () => {
  return (
    <main className='z-10 relative'>
      <section className="wrapper relative my-[100px] lg:my-[150px]" >
        <LampContainer className='hidden md:flex min-h-[500px] rounded-none '>
          <motion.h1
            initial={{ opacity: 0.5, y: 200 }}
            whileInView={{ opacity: 1, y: 120 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            My Work
          </motion.h1>
        </LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="block md:hidden text-center text-4xl font-medium tracking-tight text-gray-100 md:text-7xl"
        >
          My Work
        </motion.h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
          {Projects.map((item) => <Workcard category={item.category} title={item.title} img={item.img} link={item.link} key={item.title} techStackImgs={item.techStackImgs} />)}
        </div>
      </section>
    </main>
  )
}

export default CompletePortfolio
