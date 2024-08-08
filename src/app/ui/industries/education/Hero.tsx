'use client'
import Image from 'next/image'
import React from 'react'
import HeroImg from "../../../../../public/assets/Industries/Education/Hero.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
       <section>
        <div className="relative md:h-[90vh] h-[70vh]">
          <Image
            src={HeroImg}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative md:h-[90vh] h-[70vh] bg-gray-900 bg-opacity-55 flex items-center justify-center">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-5xl sm:text-center">
                <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }} 
                 className="mb-6 md:text-5xl text-3xl font-extrabold text-center tracking-tight text-white sm:text-4xl sm:leading-none">
                  Education Sector</motion.h2>
                  <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }} 
                  className="md:m-6 py-3 md:text-xl text-lg font-normal tracking-wide text-gray-100">
                    The education sector is rapidly evolving through the
                    integration of digital technologies, transforming how
                    education is delivered, managed and experienced. We provide
                    expert IT solutions tailored to the specific requirements of
                    educational institutions, helping them improve the learning
                    experience, improve productivity, and ensure secure online
                    learning and it is complete. Our core services include
                    learning management systems (LMS), e-learning solutions,
                    student information systems (SIS), and online assessment and
                    proctoring.
                  </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero