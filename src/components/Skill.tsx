import Image from 'next/image'
import React from 'react'
import Box from './shared/box'
import { Skills, Stacks } from '@/constants'
import IconAnimation from './shared/icon-animation'

const Skill = () => {

    return (
        <div className='w-full gap-12 my-[100px] lg:my-[150px] flex flex-col items-center lg:items-start lg:flex-row justify-between' >
            <div className='flex flex-col gap-5 items-center   w-full md:w-[692px] lg:w-0 lg:flex-grow lg:min-h-[500px] bg-[#091427] rounded-lg outline-0 border-gray-800 border-[2px] box-border p-[28.96px] group'>
                <p className='text-[24px] sm:text-[40px] font-semibold group-hover:scale-150 lg:group-hover:scale-125 transition-all text-center'>My Skills</p>
                <div className='w-full flex items-center justify-center gap-5 flex-wrap mt-8'>
                    {Skills.map((skill,i) => {
                    return (<IconAnimation i={i} key={i}>
                        <Image src={skill.imgUrl} alt={skill.imgUrl} fill sizes='icon'/>
                    </IconAnimation>  )}
                )}
                </div>
            </div>
            <div className='grid grid-cols-1 md:w-[692px] gap-9'>
                {Stacks.map((stack) => <Box key={stack.title} title={stack.title} poster={stack.poster} desc={stack.desc} imgUrl={stack.imgUrl} />)}
            </div>
        </div>
    )
}

export default Skill
