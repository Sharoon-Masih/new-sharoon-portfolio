import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
interface Itypeprops extends HTMLAttributes<HTMLElement
> {
    words: string[],
    typeSpeed: number,
    deleteNum: number,
    loop:boolean
}
const Typewriter = ({ words, typeSpeed, deleteNum,loop, className, ...props }: Itypeprops) => {
    const [typeEffect] = useTypewriter({
        words: words,
        loop: loop,
        typeSpeed: typeSpeed,
        deleteSpeed: deleteNum
    })
    return (
        <p className={cn('text-[55px] font-semibold sm:text-[70px] md:text-[80px]', className, props)}>{typeEffect}</p>
    )
}

export default Typewriter
