import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import Toastprovider from '@/providers/toast-provider'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* react toast provider */}
      <Toastprovider />
      <header className='wrapper z-20 relative top-[40px] ' id='home'>
        <Navbar />
      </header>
      {children}
      <footer className=' relative z-20 wrapper flex justify-center flex-col '>
      <Footer/>
      </footer>
      
     
    </>
  )
}

export default layout
