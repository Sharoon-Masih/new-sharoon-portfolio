import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Workcard from './shared/work-card'
import { Projects } from '@/constants'

const Portfolio = () => {
return (
<div className='flex flex-col gap-[26px] w-full bg-[#101B2E] rounded-[6px] bg-opacity-50 backdrop-blur-sm px-6 pb-6 '>
    <div className='w-full flex justify-between  pt-11 flex-col gap-2 sm:flex-row sm:gap-0'>
        <h2 className='text-[42px] sm:text-[52px] lg:text-[62px] font-semibold'>My Portfolio</h2>
        <Link href={'/complete-portfolio'} className='flex items-center sm:justify-between gap-[3px] group'>
            <span className='text-[20px] text-[#F8E7A1] font-normal'>See All</span>
            <div className='group-hover:translate-x-1 transition'>
                <Image src="/right-arrow-svgrepo-com.svg" alt="" width={20} height={20} className='object-center object-cover'/>
            </div>
        </Link>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
        {Projects.slice(0,3).map((item) => <Workcard category={item.category} title={item.title} img={item.img}link={item.link} key={item.title} techStackImgs={item.techStackImgs}/>)}

    </div>
</div>
)
}

export default Portfolio
