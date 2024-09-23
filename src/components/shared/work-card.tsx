import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'

interface Iworkcardprops extends HTMLAttributes<HTMLDivElement> {
    img: string,
    title: string,
    category: string,
    link: string,
    techStackImgs: string[]
}
const Workcard = ({ img, title, category, link, techStackImgs, className, ...props }: Iworkcardprops) => {
    return (
        // Card

        <Link href={link} target='_blank' className={cn('w-full xl:w-[360px] bg-[#101B2E] rounded-md box-border overflow-hidden bg-opacity-50 backdrop-blur-sm group', className, props)}>
            {/* card-image */}
            <div className='h-[270px] w-full active:scale-90 transition relative'>
                <Image src={img} alt={title} fill sizes='medium' className='object-center' />
            </div>
            {/* card-info */}
            <div className='  relative'>
                <div className=' h-full flex flex-col p-4'>
                    <h3 className='text-[24px] font-medium'>{title}</h3>
                    <p className='text-[20px] font-normal text-[#868490]'>{category}</p>
                </div>
                <div className='flex flex-wrap items-center justify-start gap-5 px-4 pb-4 lg:translate-y-40 group-hover:translate-y-0 transition-transform'>
                   {techStackImgs.map((img) => <Image src={img} width={30} height={30} alt={img} key={img}/>)}
                </div>
            </div>

        </Link>
    )
}

export default Workcard
