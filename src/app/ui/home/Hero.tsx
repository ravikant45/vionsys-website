"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesComponent from './ParticlesComponent';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HomePageVisuals from './HomePageVisuals';
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
    <section className="relative w-screen overflow-hidden z-10 backdrop-blur-md bg-[radial-gradient(circle_at_top,_#fff_50%,_#f8defd_100%)]">
      {/* Particles component as background */}
      <ParticlesComponent />
      <div className="relative overflow-x-hidden w-full md:h-screen grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 justify-center items-center md:p-6 px-4">
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
                className='md:text-[3rem] text-[2rem] font-medium align-middle normal-case md:pl-18 leading-normal text-orange'
                repeat={Infinity}
              />
            </span>
            <span className="md:text-3xl text-xl font-bold uppercase text-black">Company</span>
          </h2>
          <p data-aos="fade-left" className="text-md text-gray1">
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
        <div className="relative w-full h-full overflow-hidden flex justify-center items-center -z-20">
          <img data-aos="zoom-in" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?t=st=1713787087~exp=1713790687~hmac=ba02281f3eee502ad8e74fb0e8611c868955b2eab210dab955f321f8abd1bb5a&w=740" alt="" className='rounded-md w-[100%] -z-50 absolute' />

          {/* <HomePageVisuals /> */}

        </div>
      </div>
    </section>
  )
}

export default Hero;
