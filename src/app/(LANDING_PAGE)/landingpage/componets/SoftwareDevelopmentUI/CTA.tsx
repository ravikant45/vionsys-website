"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
    className="flex items-center justify-center">
      <div className="w-[94%] md:w-[90%] flex items-center justify-center md:mb-2 mb-5">
        <div className="flex flex-wrap md:w-[90%] md:py-12 gap-6 items-center justify-center md:p-6 p-2 md:m-10 m-2 bg-blue3 rounded-bl-[20%] rounded-tr-[20%] shadow-lg shadow-gray-400">
          <div className="text-white px-4 text-CardHeading-sm md:text-3xl text-center font-bold">
          Our partner with the best of industry leaders to bring you top-notch solutions every time.
          </div>
          <Link href="#" className="">
            <button
              className=" block w-full relative p-1 text-white animate-bounce px-4 rounded-md bg-orange  isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue2 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold"
            >
            Let’s Get To Work
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
};

export default CTA;
