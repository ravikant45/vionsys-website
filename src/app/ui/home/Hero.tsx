"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
    <section className="relative w-screen md:h-[100vh] overflow-hidden z-10 backdrop-blur-md bg-black">
      {/* Particles component as background */}
      {/* <ParticlesComponent /> */}
      <div className="relative overflow-hidden w-full h-full  grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 justify-center items-center md:p-6 px-4">
        {/* left */}
        <div data-aos="fade-up" className="flex flex-col gap-4 py-4">
          {/* title */}
          <h2 className="flex flex-col justify-center gap-0">
            <span className="md:text-3xl text-xl font-bold uppercase text-white">Web</span>
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
                className='md:text-[3.5rem] text-[2.3rem] font-bold align-middle normal-case md:pl-18 leading-normal text-orange'
                repeat={Infinity}
              />
            </span>
            <span className="md:text-3xl text-xl font-bold uppercase text-white">Company</span>
          </h2>
          <p data-aos="fade-left" className="text-lg font-semibold text-white">
            Your one-stop destination for top-notch web design & development services.
          </p>
          <div className='flex justify-start items-center'>
            <motion.div
              className="bg-blue1 text-white italic px-4 py-2 font-mono rounded-tl-md rounded-br-md"
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
            <Link href='/contact'>
              <Button>Get In Touch</Button>
            </Link>
          </div>
        </div>

        {/* right */}
        <div className="absolute w-full h-full overflow-hidden flex justify-center items-center -z-20 opacity-55">
          <video loop autoPlay muted className='absolute top-0 left-0 min-w-full min-h-full object-cover'>
            <source src="/assets/Home/bg-visual.mp4" type="video/mp4" className='w-full h-full overflow-hidden -z-50' />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero;
