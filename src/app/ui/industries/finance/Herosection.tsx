"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Herosection() {
  return (
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
              className="max-w-lg mb-6 text-MainHeading font-bold tracking-tight"
            >
              Driving Competitiveness and Compliance: Vionsys IT Solutions for
              the Financial Sector
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
              className="text-base text-gray-700 md:text-lg"
            >
              Innovative IT solutions are needed to maintain competitiveness,
              guarantee compliance and improve customer experience in a dynamic
              and highly regulated financial sector Vionys IT Solutions India
              Pvt Ltd specializes in IT services an innovative platform that
              targets the specific challenges and expectations of financial
              institutions including banks and insurance companies as well as
              corporate venture capitalists and fintech startups.
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
          className="relative rounded-xl flex justify-center items-center "
        >
          <Image
            className="object-cover w-full h-full"
            src="/assets/Industries/finance/Sector.jpg"
            width={500}
            height={500}
            alt="Finance Graph Image"
          />
        </motion.div>
      </div>
    </div>
  );
}
