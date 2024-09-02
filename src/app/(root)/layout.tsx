import Navbar from '@/components/shared/navbar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className='wrapper z-20 relative'>
        <Navbar />
      </header>
      {children}
      {/* vector 1 */}
      <div
        className=' h-[500px] w-[575px] md:w-[875px] lg:w-[966px]  absolute top-0 right-0 z-0 bg-[url("/vectors/Vector-1.png")] overflow-hidden'>
      </div>
      {/* vector 2 */}
      <div
        className=' h-[1000px] w-[531px] md:w-[531px] lg:w-[531px]  absolute top-[700px] -left-[300px] sm:-left-[200px] md:-left-[88px] z-0 bg-[url("/vectors/Vector-2.png")] overflow-hidden'>
      </div>
      {/* vector 3 */}
      <div
        className=' h-[1377px] w-[431px] md:w-[531px] lg:w-[700px]  2xl:w-[1000px] absolute top-[1893px] right-0 z-0 bg-[url("/vectors/Vector-3.png")] overflow-hidden blur-xl'>
      </div>
      {/* vector 4 */}
      <div
        className=' h-[718.52px] w-[231px] md:w-[426.32px]  absolute top-[3371.95px] left-0 z-0 bg-[url("/vectors/Vector-4.png")] overflow-hidden blur-xl'>
      </div>
    </>
  )
}

export default layout
