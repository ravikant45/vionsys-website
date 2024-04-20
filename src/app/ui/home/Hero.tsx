import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesComponent from './ParticlesComponent';
import { Button } from '@/components/ui/button';
function Hero() {
  return (
    <section className="relative w-screen overflow-hidden z-10 backdrop-blur-md">
      {/* Particles component as background */}
      <ParticlesComponent />
      <div className="relative w-full md:h-screen grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 justify-center items-center md:p-6 px-4">
        {/* left */}
        <div data-aos="fade-up" className="flex w-full overflow-hidden flex-col gap-4">
          {/* title */}
          <h2 className="flex flex-col justify-center gap-0">
            <span className="md:text-3xl text-xl text-black">Web</span>
            <span className="md:text-3xl text-xl font-semibold uppercase">
              <TypeAnimation
                sequence={[
                  'Design ',
                  1000,
                  'Development ',
                  1000,
                ]}
                //    wrapper="span"
                speed={60}
                className='text-[3rem] font-medium align-middle normal-case md:pl-18 leading-normal text-orange'
                repeat={Infinity}
              />
            </span>
            <span className="md:text-3xl text-xl font-bold uppercase text-black">Company</span>
          </h2>
          <p className="text-md text-gray1">
            Your one-stop destination for top-notch web design & development services.
          </p>
          <div className='flex justify-start items-center'>
            <p className='bg-blue5 px-6 text-white p-2 rounded-bl-3xl rounded-tr-3xl'>You Think, <span className="rounded-l-xl">We Make It!</span></p>
          </div>
          <div className='flex justify-start items-center'>
            <Button>Get In Touch</Button>
          </div>
        </div>

        {/* right */}
        <div data-aos="zoom-in-up" className="relative overflow-hidden w-full flex justify-center items-center">
          <div className="w-full">
            <video autoPlay loop muted className="w-full h-full object-cover ">
              <source src="/assets/video/laptop.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="absolute top-2 left-10 rounded-lg">
            hii
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
