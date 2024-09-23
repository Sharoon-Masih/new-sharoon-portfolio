import React from 'react'
import Servicecard from './shared/service-card'
import { Services } from '@/constants'

const Service = () => {
  return (
    <div className='flex flex-col items-center justify-between p-2 md:mx-10 xl:mx-0 my-[100px] lg:my-[150px]  px-6   gap-[26px] bg-'>
    <h2 className='text-[42px] sm:text-[52px] lg:text-[62px] font-semibold'>My Services</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center'>
      {Services.map((service) => <Servicecard key={service.title} title={service.title} containerColor={service.containerColor} animationSpeed={service.animationSpeed} icon={service.icon}/>)}
    </div>
    </div>
  )
}

export default Service
