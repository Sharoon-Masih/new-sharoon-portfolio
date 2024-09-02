'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules" //also
import { Profiles } from '@/constants'; //also
import "swiper/css"; //remember must import this file it will provide pre css rules on swiper its built-in in swiper package.
import Image from 'next/image';
const SwiperBar = () => {
    const [screenSize, SetscreenSize] = useState(0);
    useEffect(()=>{
        SetscreenSize(window.screen.width)
    },[])
    return (
        <div className=' lg:mt-[60px] relative gap-10 bg-[#091427] h-[200px] flex items-center justify-center bg-opacity-30 backdrop-blur-sm z-10 box-border'>
            <Swiper
                slidesPerView={screenSize < 576 ? 1 : screenSize >= 576 &&  screenSize < 768 ? 2 : screenSize >= 768 && screenSize < 992 ? 3 : 4} //how many icon will be display at a time
                loop={true} //for continue sliding
                autoplay={{
                    delay: 0, //this property is for kitna time stop hoga then move krega.
                    disableOnInteraction: false //this means ka agr isko "true" set krenga so iska mtlb hoga ka jab user hover krega ya click krega toh slide stop hojaga and then jab wapis usko slide krega toh wo move krega. 
                }}
                speed={5000} //for speed of slider
                modules={[Autoplay]} //for autoplay 
                className='w-full  '> {/*must set width of slider  */}
                {Profiles.map((plt) => <SwiperSlide key={plt.platform}> {/* always put slider content in <SwiperSlide/> */}
                    <div className='h-[109px] w-[285px] flex justify-center items-center'>
                        <div className='h-[90.96px] w-[183.72px] relative'>
                            <Image src={plt.logo} alt={plt.platform} fill  className='z-0 object-center' />
                        </div>
                    </div>
                </SwiperSlide>)}

            </Swiper>
        </div>
    )
}

export default SwiperBar
