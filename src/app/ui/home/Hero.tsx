"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesComponent from './ParticlesComponent';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BgVisual from "/public/assets/Home/bgVisualForVionsys.jpg";
function Hero() {
  const squareVariants = {
    initial: {
      rotate: 45, // Rotate the square by -45 degrees initially
    },
    animate: {
      rotate: 0, // Rotate back to 0 degrees on animation
      transition: {
        duration: 1, // Adjust the duration of the animation as needed
      },
    },
  };
  return (
    <section className="relative w-screen md:h-[100vh] overflow-hidden z-10 backdrop-blur-md">
      {/* Particles component as background */}
      <ParticlesComponent />
      <div className="relative overflow-hidden w-full h-full  grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 justify-center items-center md:p-6 px-4">
        {/* left */}
        <div data-aos="fade-up" className="flex flex-col gap-4 py-4">
          {/* title */}
          <h2 className="flex flex-col justify-center gap-0">
            <span className="md:text-3xl text-xl text-white">Web</span>
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
                className='md:text-[3rem] text-[2rem] font-medium align-middle normal-case md:pl-18 leading-normal text-orange'
                repeat={Infinity}
              />
            </span>
            <span className="md:text-3xl text-xl font-bold uppercase text-white">Company</span>
          </h2>
          <p data-aos="fade-left" className="text-md text-slate-200">
            Your one-stop destination for top-notch web design & development services.
          </p>
          <div className='flex justify-start items-center'>
            <motion.div
              className="bg-blue5 text-white italic px-4 py-2 font-mono rounded-tl-md rounded-br-md"
              variants={squareVariants}
              initial="initial"
              animate="animate"
            >
              <span>
                You Think, <span className="rounded-l-xl">We Make It!</span>
              </span>
            </motion.div>
          </div>
          <div className='flex justify-start items-center'>
            <Button>Get In Touch</Button>
          </div>
        </div>

        {/* right */}
        <div className="absolute w-full h-full overflow-hidden flex justify-center items-center -z-20">
          <Image data-aos="zoom-in" src={BgVisual} alt="" className='w-[100%] h-[100%] overflow-hidden -z-50 absolute opacity-30' />
        </div>
      </div>
    </section>
  )
}

export default Hero;
