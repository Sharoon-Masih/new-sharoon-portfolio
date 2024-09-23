import React from 'react'
import ContactForm from './shared/contactForm'

const Contact = () => {
    return (
        <div className="bg-[url('/contactform-bg.png')] h-[800px] bg-center bg-fixed bg-opacity-10 backdrop-blur-md my-[100px] lg:my-[150px] flex justify-center items-center flex-col w-full">
        <h2 className='text-[42px] sm:text-[52px] lg:text-[62px] font-semibold pt-11'>Contact Me !</h2>
            <ContactForm />
        </div>
    )
}

export default Contact
