'use client'
import React, { useState } from 'react'
import { navItem } from '@/constants'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { crossBtn, mobNav } from '@/utils/motion'
import Underline from './underline'
const MobNav = () => {
const [click, Setclick] = useState(false)
return (
<>
<i className='block md:hidden'>
<button onClick={() => Setclick((prev) => !prev)}
    className='p-2 w-8 h-8 flex justify-between items-center flex-col gap-1'>
    <motion.span
        variants={crossBtn(8, 45, click)}
        initial='hidden'
        animate='show'
        className="w-5 h-2 bg-[#E5E5E5]"></motion.span>
    {!click && <span className="w-5 h-2 bg-[#E5E5E5]"></span>}
    <motion.span
        variants={crossBtn(0, -45, click)}
        initial='hidden'
        animate='show'
        className="w-5 h-2 bg-[#E5E5E5]"></motion.span>
</button>
</i>
{click &&
<motion.div
    variants={mobNav(click)}
    initial='hidden'
    animate='show'
    className='block md:hidden absolute w-full h-auto top-[40px]  right-0 left-0 z-20 bg-[#030E21] py-10'>
    <nav className='block md:hidden'>
        <ul className='list-none flex gap-[40px] flex-col items-center justify-between '>
            {
                navItem.map((item) =>
                    <Underline key={item.name}>
                        <Link href={item.link}> {item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}
                        </Link>
                    </Underline>)
            }
        </ul>
    </nav>
</motion.div>}
</>
)
}

export default MobNav
