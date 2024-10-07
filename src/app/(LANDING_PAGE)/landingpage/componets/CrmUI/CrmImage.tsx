'use client'
import React from 'react'
import CRMImage from '../../../landingpage/images/Crm/Crm11.jpg'
import Image from 'next/image';
import { motion } from "framer-motion";

const CrmImage = () => {
  return (
    <div className='px-[10%] py-[5%]'>
        <div className="bg-black relative flex justify-center items-center">
        <Image
          src={CRMImage}
          alt=""
          className="md:w-[100vw] md:h-[100vh] h-[30vh] sm:[50vh] opacity-70"
          quality={100}
        />
        <div className="absolute px-3 top-7 flex flex-col gap-2 justify-center items-center text-white">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="md:text-5xl text-xl text-white font-extrabold text-center"
          >
            Customer Relationship Management (CRM)
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-white italic md:text-xl text-sm"
          >
            Selecting Excellence: Elevate Your CRM Experience with Us.
          </motion.h3>
        </div>
      </div>
    </div>
  )
}

export default CrmImage