'use client'
import React, { ReactNode, useState } from 'react'
import {motion} from 'framer-motion'
import { underline } from '@/utils/motion'
const Underline = ({children}:{children:ReactNode}) => {
    const [hover,Sethover] = useState(false)
    return (
    <>
     <li className='text-[13px] sm:[15px] lg:text-[17px] font-normal text-[#E5E5E5] flex flex-col items-center justify-between box-border relative' onMouseOver={()=>Sethover(true)} onMouseLeave={()=>Sethover(false)}>
        {children}
     <motion.span 
      variants={underline(hover)}
      initial='hidden'
      animate='show'
     className=' h-[2px] bg-[#E5E5E5]'>
     </motion.span>
     
     </li>
    </>
  )
}

export default Underline
