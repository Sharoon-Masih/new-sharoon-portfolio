import React from 'react'
import { navItem as Items } from '@/constants'
import Link from 'next/link'
import Underline from './underline'
const NavItem = () => {
  return (
    <nav className='hidden md:block'>
        <ul className='list-none flex gap-[40px] h-[27px] w-[411px] items-center justify-between '>
            {
                Items.map((item) => 
                <Underline key={item.name}>
                  <Link href={item.link}>
                   {item.name.charAt(0).toUpperCase()+item.name.slice(1).toLowerCase()}
                </Link>
                </Underline>)
            }
        </ul>
    </nav>
  )
}

export default NavItem
