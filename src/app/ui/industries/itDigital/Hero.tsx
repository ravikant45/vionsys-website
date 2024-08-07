"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="relative h-full md:h-[100vh] w-full overflow-hidden bg-black">
        <Image
          alt="Hero Image"
          className="md:h-full h-[40vh] w-full object-fit opacity-35"
          height={1080}
          src={"/assets/Industries/ITDigital/ITHero.jpg"}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="text-2xl font-bold tracking-tight sm:text-5xl md:text-6xl mt-6"
          >
            IT Digital Transformation
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
