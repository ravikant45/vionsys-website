"use client"
import React from "react";
import Image from "next/image";
import ITStaffing from "/public/assets/services/ITStaffing/ITStaffing.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-black">
          <Image
            src={ITStaffing}
            alt=""
            className="md:w-[100vw] md:h-[100vh] h-[50vh] sm:[50vh] opacity-55"
            quality={100}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 md:pt-10"
        >
          <h1 className="md:text-4xl text-2xl font-extrabold md:py-6 py-1">
            Welcome to Vionsys IT Staffing Services
          </h1>
          <p className="md:text-xl text-base md:w-2/3 pt-2">
            We understand the critical role that skilled IT professionals play
            in driving innovation, productivity and growth for businesses of all
            sizes. Our comprehensive IT staffing services are designed to
            connect organizations with top-tier talent and provide flexible
            staffing solutions tailored to their unique needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
