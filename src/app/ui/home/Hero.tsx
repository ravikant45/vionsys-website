import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesComponent from './ParticlesComponent';
function Hero() {
  return (
    <div className='w-[100vw] md:h-[100vh]'>
      <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center items-center'>
        {/* left section */}
        <div className='w-4/5 md:pl-14'>
          <ParticlesComponent />
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
            className='text-4xl font-medium align-middle normal-case md:pl-18 leading-normal'
            repeat={Infinity}
          />
          <h1 className='text-4xl font-medium align-middle normal-case leading-normal'>Company </h1>
          <div className='text-xl mt-5'>Your one-stop destination for top-notch web design & development services.</div>
          <div className='mt-5 space-y-4'>You Think, We Make It!</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 border border-blue-700 rounded mt-8">Get In Touch</button>
          <div className='pb-14'></div>
        </div>

        {/* Right section */}
        <div className='w-full h-full flex justify-center items-center z-0'>
          Hii
        </div>
      </div>
    </div>
  )
}

export default Hero;
