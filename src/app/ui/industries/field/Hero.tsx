'use client'

import { AuroraBackground } from '@/components/ui/aurora-background'
import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
    <section className="overflow-x-hidden pt-16">
        <AuroraBackground>
          <div className="relative flex flex-col gap-4 items-center justify-center px-4 md:py-10 py-4 md:h-[60vh] h-[60vh]">
            <div className="flex flex-col justify-center items-center gap-4">
              <motion.h3
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }} 
               className="text-4xl text-[#215cbc] font-extrabold text-center">
                Field Services Sector
              </motion.h3>
              <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }} 
               className="md:text-lg text-base text-center max-w-5xl">
                The farming industry is evolving with a focus on efficiency,
                real-time data access, and enhanced customer experience. We
                offer comprehensive IT solutions tailored to meet the unique
                needs of the farming sector. Our services include software
                development, mobile apps, cloud solutions, IoT integration, IT
                infrastructure support, and training. Streamline your operations
                and stay competitive with our cutting-edge technology solutions.
              </motion.p>
            </div>
          </div>
        </AuroraBackground>
      </section>
    </>
  )
}

export default Hero