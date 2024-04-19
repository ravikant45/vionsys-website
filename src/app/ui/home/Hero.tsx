import React from 'react';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

import About from '../../../../public/assets/about.jpg';
import ParticlesComponent from './ParticlesComponent';

function Hero() {
  return (
    <div>
        <div className='mx-autow-full pt-24'>
        <ParticlesComponent />
      <div className='grid grid-cols-2 justify-items-center items-center'>
        <div className='w-4/5 pl-14'>
            <h1 className='text-4xl font-medium align-middle normal-case leading-normal'>Web </h1>
            <TypeAnimation
               sequence={[
               'Design ',
               1000,
               'Development ',
               1000,
               ]}
            //    wrapper="span"
               speed={60}
               className='text-4xl font-medium align-middle normal-case pl-18 leading-normal'
               repeat={Infinity}
            />
            <h1 className='text-4xl font-medium align-middle normal-case leading-normal'>Company </h1>
            <div className='text-xl mt-5'>Your one-stop destination for top-notch web design & development services.</div>
            <div className='mt-5 space-y-4'>You Think, We Make It!</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 border border-blue-700 rounded mt-8">Get In Touch</button>
            <div className='pb-14'></div>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-2 bg-slate-100 justify-items-center items-center '>
       <div className='p-5 pt-16'>
           <Image src={About} alt=""/>
       </div>
       <div className='w-4/5'>
          <h4 className='underline font-semibold text-xl mt-7'>About Our Company</h4>
          <h5 className='text-lg mt-5'>Elevating your business through exemplary IT services is our unwavering passion and commitment.</h5>
          <div className='text-sm mt-5'>Vionsys IT solutions INDIA Pvt. Ltd. is a leading IT company providing comprehensive solutions. From software development and cloud services to cybersecurity and IT consulting, we offer a wide range of expertise. Our experienced team delivers tailored solutions, ensuring efficiency, reliability, and scalability, to empower businesses to thrive in the digital era.</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 border border-blue-700 rounded mt-8">Learn more</button>
        </div> 
    </div>
    <div>
       <h4 className='underline font-semibold text-xl mt-7'>What we provide</h4>
       <h1 className='text-4xl mt-5'>IT Solutions</h1>
       
    </div>
    </div>
  )
}

export default Hero
