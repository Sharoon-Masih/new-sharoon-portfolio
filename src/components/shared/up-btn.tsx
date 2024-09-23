'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
const Upbtn = () => {
return (
<motion.div
initial={{opacity:0,y:20}}
whileInView={{opacity:100,y:0}}
viewport={{once:false,amount:0.10}}
className='fixed bottom-2 right-2 z-20'>
    <Link href={"#home"} >
        <Image src={'/up-arrow-svgrepo-com.svg'} alt='up-btn' width={50} height={50} />
    </Link>
</motion.div>
)
}

export default Upbtn
