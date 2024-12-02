"use client";
import Image from "next/image";
import React from "react";
import HeroImg from "../../../../../public/assets/Industries/Education/Hero.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="relative h-[70vh] md:h-[90vh]">
        <Image
          src={HeroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Educating Image"
        />
        <div className="relative h-[70vh] md:h-[90vh] bg-gray-900 bg-opacity-55 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto px-4 md:px-8 py-16 lg:py-20">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-3xl md:text-5xl font-extrabold text-white mb-6"
            >
              Education Sector
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-base md:text-xl text-gray-100 py-3 md:my-6"
            >
              The education sector is rapidly evolving through the integration
              of digital technologies, transforming how education is delivered,
              managed, and experienced. We provide expert IT solutions tailored
              to the specific requirements of educational institutions, helping
              them improve the learning experience, productivity, and ensure
              secure online learning. Our core services include learning
              management systems (LMS), e-learning solutions, student
              information systems (SIS), and online assessment and proctoring.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
