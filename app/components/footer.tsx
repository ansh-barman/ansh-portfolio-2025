'use client';
import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <section className='px-8 mt-8 relative z-50'>
      <div className='md:w-[90%] md:mx-auto'>
        <h1 className='text-4xl font-heading text-white'>Get in touch</h1>
        <hr className='text-[#2c9ab7] w-20 border-[1px]' />  
      </div>  
      <div className='md:w-[90%] md:mx-auto flex items-center justify-between'>
        <div className='my-5'>
          <div className='flex items-center justify-start gap-4 mt-4 text-white'>
            <i className="fa-solid fa-envelope text-[#2c9ab7] text-sm"></i>
            <Link className='text-xs' target='blank' href='mailto:barmanansh99@gmail.com'>barmanansh99@gmail.com</Link>
          </div>
          <div className='flex items-center justify-start gap-4 mt-4 text-white'>
            <i className="fa-solid fa-phone text-[#2c9ab7] text-sm"></i>
            <Link className='text-xs' href='telto:9354630165'>(+91) 935 463 0165</Link>
          </div>
          <div className='flex items-center justify-start gap-4 mt-4 text-white'>
            <i className="fa-brands fa-linkedin text-[#2c9ab7] text-sm"></i>
            <Link className='text-xs' target='blank' href='https://www.linkedin.com/in/ansh-barman-6159201ba'>Ansh Barman</Link>
          </div>
          <div className='flex items-center justify-start gap-4 mt-4 text-white'>
            <i className="fa-brands fa-github text-[#2c9ab7] text-sm"></i>
            <Link className='text-xs' target='blank' href='https://github.com/ansh-barman'>Ansh Barman</Link>
          </div>
        </div>
        <div className='hidden md:block md:w-[40%]'>
            <p className='md:mb-6'>Interested in working together? Feel free to reach out for collaborations or just a friendly hello</p>
            <hr className='text-[#2c9ab7] w-20' />
        </div>
      </div>
      <hr className='my-5 text-gray-800 opacity-55' />
      <div className='md:flex md:w-[90%] md:mx-auto items-start justify-between'>
        <p className='text-[10px] text-center opacity-30 mt-1'>© 2025 Ansh Barman. All Rights Reserved</p>
        <div className='my-4 flex items-center justify-center md:my-0'>
          <Link href="/"><i className="hover:text-[#2c9ab7] fa-brands fa-dribbble text-white w-8 h-8 md:w-10 md:h-10"></i></Link>
          <Link href="/"><i className="hover:text-[#2c9ab7] fa-brands fa-behance text-white w-8 h-8 md:w-10 md:h-10"></i></Link>
          <Link href="/"><i className="hover:text-[#2c9ab7] fa-brands fa-github text-white w-8 h-8 md:w-10 md:h-10"></i></Link>
          <Link href="/"><i className="hover:text-[#2c9ab7] fa-brands fa-linkedin text-white w-8 h-8 md:w-10 md:h-10"></i></Link>
        </div>
      </div>
    </section>
  )
}

