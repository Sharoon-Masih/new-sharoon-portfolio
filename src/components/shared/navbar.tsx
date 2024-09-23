import Link from 'next/link'
import React from 'react'
import NavItem from './navItem'
import MobNav from './mobNav'

const Navbar = () => {
return (
<div className='w-full flex justify-between  items-center z-20 '>
    <Link href={'/'} className='tracking-wider text-[20px] xs:text-[24px] sm:text-[28px] lg:text-[32px] text-[#E5E5E5] uppercase relative font-bold '>
        <h1>sharoon</h1>
        <span className='bg-[#F8E7A1] rounded-[100%] w-[8px] h-[8px] absolute top-1 sm:top-2 -right-4 '></span>
    </Link>
    <NavItem/>
    <MobNav/>
</div>
)
}

export default Navbar
