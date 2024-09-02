'use client'
import React, { HTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { iconContainer } from '@/utils/motion'
import { cn } from '@/lib/utils'

interface IconAnimationProps extends HTMLAttributes<HTMLDivElement> {
    i: number, 
    children: ReactNode
}
const IconAnimation = ({i,children,className,...props}:IconAnimationProps) => {
    return (
        <motion.div
            variants={iconContainer}
            initial={'hidden'}
            whileInView={iconContainer.show(i)}
            viewport={{once:true,amount:0.25}}
            className={cn('w-12 h-12 rounded-full overflow-hidden relative bg-yellow-100`',className,props)}>
            {children}
        </motion.div>
    )
}

export default IconAnimation
