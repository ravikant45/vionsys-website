import React from 'react';

import Image from 'next/image';

import ChooseUsIMG from '../../../../public/assets/Home/ChooseUs.png';

function ChooseUs() {
  return (
    <div className='grid md:grid-cols-2 px-6 py-4 grid-cols-1 bg-slate-100 justify-items-center items-center'>
        <div className=''>
            <p className='underline font-semibold text-xl text-orange'>Why choose us?</p>
            <p className='text-lg mt-5 text-black'>Ensure the protection of your brand with our Cybersecurity & IT Solutions</p>
            <p className='text-sm mt-5 mb-5'>Choose us for your IT requirements as we provide innovative solutions, have a team of highly skilled experts, provide reliable support and prioritize customer satisfaction to propel your business towards success.</p>
        </div>
        <div>
            <Image src={ChooseUsIMG} quality={100} alt='' className='p-6'/>
        </div>
    </div>
  )
}

export default ChooseUs;
