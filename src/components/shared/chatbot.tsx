'use client'
import React, { useState } from 'react'
import Image from 'next/image'
const Chatbot = () => {
    const [btn, Setbtn] = useState(false)
    return (
        <>
            <button onClick={() => { Setbtn(prev => !prev) }} className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full  fixed bottom-3 right-3 z-20 bg-[#F8E7A1] hover:scale-110 transition duration-200 active:scale-95 flex justify-center items-center'>
                <Image src={btn ? '/cross-svgrepo-com.svg' : '/bot-svgrepo-com.svg'} width={30} height={30} alt='bot' />
            </button>

            {btn && <div className='fixed bottom-[75px] right-3 z-[50]  '>
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/kSc4M1ueLfOJuRWM3o3_E"
                    className=" h-[370px] lg:h-[400px] xl:h-[550px] w-full md:w-[400px] "
                ></iframe>

            </div>}
        </>
    )
}

export default Chatbot
