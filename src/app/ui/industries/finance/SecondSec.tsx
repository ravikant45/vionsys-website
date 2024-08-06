"use client"
import { Button } from '@/components/ui/button'
import { Finances } from '@/utils/Finance'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { VscDebugBreakpointLog } from "react-icons/vsc";


export default function SecondSec() {
  return (
    <div>
    <div className="px-4 py-5 mx-auto bg-dot-slate-300 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h1 className='w-full border-b border-gray-400 rounded-2xl pb-5 text-center font-bold text-MainHeading text-4xl'>
        <div>Our Services</div>
        </h1>
    {Finances.map((data) => (
    <div key={data.id} className='mb-8 px-5 py-8 bg-white border-b border-gray-400 rounded-2xl'>
    <div className="max-w-2xl mb-10 sm:mx-auto">

      <motion.h2 
       initial={{ opacity: 0, x: -100 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
         delay: 0.3,
         x: { type: "spring", stiffness: 30 },
         duration: 0.6,
         ease: "easeInOut",
       }}
       className="text-SubHeading bg-slate-300 bg-opacity-10 border-b rounded-2xl py-2 border-gray-400 font-bold leading-tight tracking-tight text-center">
      {data.heading}
      </motion.h2>

    </div>
    <div className="grid gap-12 row-gap-8 lg:grid-cols-3">

      <motion.div 
       initial={{ opacity: 0, x: -100 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
         delay: 0.3,
         x: { type: "spring", stiffness: 30 },
         duration: 0.6,
         ease: "easeInOut",
       }}
       className="flex">
        <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-2xl bg-indigo-50">
           {/* kjhgfd */}
           <VscDebugBreakpointLog />
          </div>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">{data.subheading1}</h6>
          <p className="text-sm text-gray-900">
            {data.para1}
          </p>
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 30 },
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="flex">
        <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-2xl bg-indigo-50">
           {/* jhgfgd */}
           <VscDebugBreakpointLog/>
          </div>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">{data.subheading2}</h6>
          <p className="text-sm text-gray-900">
            {data.para2}
          </p>
        </div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 30 },
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="flex">
        <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-2xl bg-indigo-50">
            {/* jhg */}
            <VscDebugBreakpointLog/>
          </div>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">{data.subheading3}</h6>
          <p className="text-sm text-gray-900">
           {data.para3}
          </p>
        </div>
      </motion.div>

    </div>
    </div>
     ))}
  </div>

<div className="px-2 mb-10 bg-dot-slate-300 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className='bg-white'>
<div className="p-8 bg-slate-500 bg-opacity-10 border-t rounded-xl shadow-xl ">
  <div className="flex">
    <div className="relative w-full">

      <motion.h2
       initial={{ opacity: 0, x: -100 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
         delay: 0.3,
         x: { type: "spring", stiffness: 30 },
         duration: 0.6,
         ease: "easeInOut",
       }} 
      className="text-center mb-6 text-MainHeading font-bold tracking-tight sm:text-4xl">
       Partner with Vionsys IT Solutions
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 30 },
          duration: 0.6,
          ease: "easeInOut",
        }}
       className="mb-4 text-base text-center text-gray-700">
       Vionsys IT Solutions India Pvt. Transform your financial institution with Contact us today to learn how our specialized IT solutions can help you achieve operational efficiencies, ensure compliance, and deliver a better customer experience in finance.
      </motion.p>

     <motion.div
       initial={{ opacity: 0, x: -100 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
         delay: 0.3,
         x: { type: "spring", stiffness: 30 },
         duration: 0.6,
         ease: "easeInOut",
       }}
      className='flex justify-center items-center'>
     <Link href={"/contact"}>
      <Button className="text-lg text-center">Contact Us</Button>
     </Link>
     </motion.div>

    </div>
  </div>
</div>
</div>
</div>

</div>
  )
}
