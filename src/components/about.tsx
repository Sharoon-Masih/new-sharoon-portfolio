import React from 'react'
import { TracingBeam } from './ui/tracingBeam'
import Image from 'next/image'

const About = () => {
   return (
      <div className='p-2 md:mx-10 xl:mx-0 my-[100px] lg:my-[150px]  '>
         <TracingBeam className='flex justify-between items-center flex-col lg:flex-row  w-full '>
            <div className='flex justify-between items-center w-[100%] flex-col lg:flex-row gap-4 md:gap-6'>
               <div className='flex flex-col justify-between items-center lg:items-start gap-4 md:gap-6  py-6 p-2 '>
                  <h1 className='text-4xl sm:text-5xl md:text-7xl text-gray-100 font-semibold'>Sharoon</h1>
                  <h2 className='text-4xl sm:text-5xl md:text-7xl text-gray-100 lg:pl-[120px] font-semibold'>Masih</h2>
                  <span className='text-center lg:text-start max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[700px] lg:pl-[300px] flex flex-col gap-4 items-center justify-between antialiased p-4 '>
                     <p className='text-base md:text-lg lg:text-base text-gray-200 antialiased'>Hey, I&apos;m Sharoon, a seasoned web developer with a passion for Blockchain and AI technologies. Alongside my expertise, I co-founded and currently lead Techverse51, a vibrant community initiative. Over the months, I&apos;ve spearheaded numerous projects, with standout examples featured in the project section below. Let&apos;s connect and explore how we can innovate together.
                     </p>
                  </span>
               </div>
               <div className='relative sm:w-[500px] sm:h-[500px] lg:h-[400px] rounded-full overflow-hidden lg:mr-5'>
                  <Image src={"/dp-bgblack.png"} alt='myPic' fill={true} className='' />
               </div>
            </div>
            <div className='flex flex-col items-center justify-between gap-6 py-8 p-2 lg:items-start'>
               <h1 className='text-3xl sm:text-4xl md:text-6xl text-gray-100 font-medium text-center lg:text-start'>
                  Need Fast, Scalable Web or ChatGpt Solutions?</h1>
               <div className='text-gray-200 antialiased text-center lg:text-start max-w-[280px] sm:max-w-[500px] md:max-w-full text-base  md:text-lg lg:text-xl p-4  '>
                  <p className='font-medium sm:text-lg lg:text-2xl'>
                     Is your <span className='text-yellow-500'>website losing customers</span> due to  slow performance and <span className='text-yellow-500'>
                        outdated technology</span>  or your competitors gaining ground because your <span className='text-yellow-500'>
                        website isn&apos;t ranking well?
                     </span> Let&apos;s solve these challenges together.
                  </p>
               </div>
               <ul className='flex flex-col gap-3 items-center lg:items-start w-full text-sm'>
                  <li className='text-center sm:text-start md:text-lg'>🔆 Customers leaving due to slow website performance.</li>
                  <li className='text-center sm:text-start md:text-lg'>🔆 Decreased user engagement and higher bounce rates.</li>
                  <li className='text-center sm:text-start md:text-lg'>🔆 Poor search engine rankings affecting visibility.</li>
                  <li className='text-center sm:text-start md:text-lg'>🔆 Losing sales opportunities to competitors.</li>
                  <li className='text-center sm:text-start md:text-lg'>
                     🔆 Difficulty in retaining customer trust and loyalty.
                  </li>
               </ul>
            </div>
         </TracingBeam>
               <p className='text-center text-base sm:text-xl font-medium lg:font-semibold mt-5'>Are you seeking solutions to the challenges mentioned above? <br className='hidden sm:block'/> You&apos;re in the right place! Please fill the contact form below 👇
               </p>
      </div>
   )
}

export default About
