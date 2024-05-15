import React from 'react';

import Image from 'next/image';

import ChooseUsIMG from '../../../../public/assets/Home/ChooseUs.svg';

function ChooseUs() {
  return (
    <div className='grid overflow-x-hidden md:grid-cols-2 px-6 py-4 grid-cols-1 bg-slate-100 justify-items-center items-center'>
      <div className=''>
        <p data-aos="fade-right" className='font-extrabold text-MainHeading'>Why choose us?</p>
        <p data-aos="fade-left" className='text-SubHeading font-bold mt-5'>Ensure the protection of your brand with our Cybersecurity & IT Solutions</p>
        <p data-aos="fade-up" className='text-paragraph mt-5 mb-5'>Choose us for your IT requirements as we provide innovative solutions, have a team of highly skilled experts, provide reliable support and prioritize customer satisfaction to propel your business towards success.</p>
      </div>
      <div>
        <Image data-aos="zoom-in" src={ChooseUsIMG} quality={100} alt='' className='p-6' />
      </div>
    </div>
  )
}

export default ChooseUs;
