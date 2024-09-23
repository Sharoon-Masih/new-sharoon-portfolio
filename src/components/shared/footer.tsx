import Link from 'next/link'
import React from 'react'
import NavItem from './navItem'
import { SmIcon } from '@/constants'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className=' py-10 w-full flex flex-col justify-center items-center gap-5 md:gap-10'>
                <Link href={'#home'} className='tracking-wider text-[30px] sm:text-[34px] lg:text-[37px] text-[#E5E5E5] uppercase relative font-bold '>
                    <h1>sharoon</h1>
                    <span className='bg-[#F8E7A1] rounded-[100%] w-[8px] h-[8px] absolute top-1 sm:top-2 -right-4 '></span>
                </Link>
                <NavItem />
                <div className='flex justify-center items-start gap-2 sm:gap-6 md:gap-12 '>
                    {SmIcon.map((platform) => <Link href={platform.link} key={platform.icon} target='_blank'>
                        <Image src={platform.icon} alt={platform.link} width={30} height={30} sizes='icon' />
                    </Link>)}
                </div>
            </div>
            <hr />
            <p className='py-10 text-center text-sm md:text-base'>Sharoon Masih &copy; 2024. All Rights Reserved</p>
        </>
    )
}

export default Footer
