'use client'

import { Button } from "@/components/ui/button";
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <div>
        <section className="md:m-3">
        <div className="mx-auto my-10 md:py-8 py-6 bg-gray-200 rounded-lg text-center">
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="font-extrabold text-MainHeading text-center md:py-0 py-3"
          >
            Partner with Us!
          </motion.h3>
          <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="md:m-4 px-6 text-base font-normal tracking-wide md:text-lg">
            We transform your education services with Our flagship IT solutions
            empower educational institutions to drive operational efficiencies,
            inspire innovation and deliver superior learning experiences.
            Contact us today to learn how we can help your organization thrive
            in a dynamic education environment.
          </motion.p>
          <motion.p 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="mt-4 flex md:gap-4 gap-2 justify-center items-center flex-wrap">
            <Link href="/contact">
              <Button>Contact us</Button>
            </Link>
          </motion.p>
        </div>
      </section>
    </div>
  )
}

export default Cta