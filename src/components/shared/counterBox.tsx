'use client'
import { cn } from '@/lib/utils'
import React, { HTMLAttributes, useEffect, useState } from 'react'

interface IcounterBox extends HTMLAttributes<HTMLDivElement> {
    text: string,
    totalCount: number,
}
const CounterBox = ({ className, text, totalCount, ...props }: IcounterBox) => {
    const [count, Setcount] = useState(0)
 
    useEffect(() => {
   
            const interval = setInterval(() => {
                Setcount((prev) => {
                    if (prev >= totalCount) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 300);
        
            // Cleanup function to clear the interval when the component unmounts
            return () => clearInterval(interval);
    }, [])
    return (
        <div className={cn('flex flex-col items-end box-border w-[131px] h-[192px]', className, props)}>
            <p className={'text-center text-[20px] sm:text-[20px] lg:text-end text-[#868490] lg:text-[24px] font-medium'}>{text}</p>
            <p className='text-[#FFFFFF] text-[52px] sm:text-[52px] lg:text-[72px] font-semibold' id={text}>{count}+</p>
        </div>
    )
}

export default CounterBox
