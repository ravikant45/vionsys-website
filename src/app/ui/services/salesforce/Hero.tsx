"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import salesbg2 from "/public/assets/services/Salesforce/salesbg2.jpg";
const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen  px-1">
        <Image
          src={salesbg2}
          alt="Salesforce Image"
          className="object-cover bg-cover w-full absolute h-screen"
        />

        <div className="relative w-screen flex flex-col justify-center items-center gap-4">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-xl md:text-4xl px-2 text-white text-center font-extrabold"
          >
            Drive Breakthrough Advancements In
            <span className="font-extrabold flex justify-center">
              Salesforce
            </span>{" "}
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
            className="font-bold text-center md:text-2xl text-lg text-orange px-2"
          >
            Elevate Your Business with Our Salesforce Services.
          </motion.h3>

          <p className="text-center font-normal md:w-2/3 w-full text-paragraph md:px-2 px-1 leading-9 text-white relative">
            At Vionsys IT Solutions India Pvt Ltd, we specialize in
            comprehensive Salesforce implementation that helps businesses
            leverage the full potential of this powerful CRM platform. Our team
            of experts is dedicated to providing solutions that improve
            efficiency, improve customer relationships and enhance your overall
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
