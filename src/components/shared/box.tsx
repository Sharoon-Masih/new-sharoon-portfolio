import Image from 'next/image'
import React from 'react'

const Box = ({poster,title,desc,imgUrl}:{poster:string,title:string,desc:string,imgUrl:string[]}) => {
  return (
    <div className=' w-full bg-[#091427] rounded-lg outline-0 border-gray-800 border-[2px] box-border p-[28.96px] flex justify-between items-start flex-col gap-10 group'>
    <div className='flex justify-between items-center gap-5 sm:items-start'>
        <div className='w-[90px] h-[85px] sm:w-[111px] sm:h-[102px] rounded-lg relative overflow-hidden'>
            <Image src={poster} alt='wih' fill sizes='icon' />
        </div>
        <div>
            <p className='text-[24px] sm:text-[40px] font-semibold group-hover:translate-x-2 transition-all '>{title}</p>
            <p className='text-[20px] sm:text-[24px] font-medium text-[#868490]  line-clamp-1'>{desc}</p>
        </div>
    </div>
    <div className='flex justify-center items-center flex-wrap gap-5'>{imgUrl.map((img:string)=><div key={img} className='w-10 h-10 rounded-full overflow-hidden relative hover:scale-110 transition-all'><Image src={img} alt={img} fill sizes='icon' className='object-center '/></div>)}</div>
</div>
  )
}

export default Box
