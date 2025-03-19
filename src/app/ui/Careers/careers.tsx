"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CareerImage from "/public/assets/career/career.jpg";
const CareerComponent = () => {
  return (
    <div className=" w-[100vw] md:h-[100vh] h-auto">
      <div className="relative w-full md:h-full h-[70vh] bg-black">
        <Image
          className="w-full h-full object-cover bg-no-repeat opacity-45"
          src={CareerImage}
          quality={70}
          alt="Career Image"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 pt-10">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="md:text-4xl text-3xl font-extrabold py-6 sm:px-2
          "
          >
            {" "}
            Build your career at Vionsys
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="md:text-xl text-lg  md:w-1/2 pt-2"
          >
            Uncover boundless possibilities with Vionsys IT Solutions India Pvt.
            Ltd. Be part of a dynamic team where creativity, advancement and
            teamwork thrive. Embark on your path towards a brighter professional
            future now.
          </motion.h5>
        </div>
      </div>
    </div>
  );
};

export default CareerComponent;
