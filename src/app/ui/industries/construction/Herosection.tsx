"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


export default function Herosection() {
  return (
    <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        <div className="max-w-xl mb-6">
        
          <motion.h2 
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{
             delay: 0.3,
             x: { type: "spring", stiffness: 30 },
             duration: 0.6,
             ease: "easeInOut",
           }}
           className="max-w-lg mb-6 text-MainHeading font-bold tracking-tight">
          Modernizing the Construction Industry: Expert IT Solutions from 
          Vionsys
          </motion.h2>
          <motion.p 
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{
             delay: 0.3,
             x: { type: "spring", stiffness: 30 },
             duration: 0.6,
             ease: "easeInOut",
           }}
           className="text-base text-gray-700 md:text-lg">
          The construction industry is modernizing as new technologies are integrated to improve project management, efficiency, safety and compliance. Vionsys IT Solutions India Pvt Ltd provides expert IT solutions designed to meet the specific needs of the construction industry, helping businesses optimize productivity, increase efficiency and drive innovation.
          </motion.p>
        </div>
       
      </div>
      <motion.div 
       initial={{ opacity: 0, scale: 0.5 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{
         delay: 0.3,
         scale: { type: "spring", stiffness: 30 },
         duration: 0.3,
         ease: "easeInOut",
       }}
       className="relative rounded-xl flex justify-center items-center bg-slate-950 bg-opacity-15 ">
        <Image 
         src="/assets/Industries/construction/main.png"
         width={400}
         height={400}
         alt=""
        />
       
      </motion.div>
    </div>
  </div>

  <h1 className='text-center text-2xl font-bold sm:text-4xl text-orange'><div data-aos="flip-left">Our Services</div></h1>
  </div>
  )
}
