"use client"
import React from "react";
import Image from "next/image";
import devops from "/public/assets/services/devops.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className=" md:px-6 space-y-10 xl:space-y-28">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div className="pt-5">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
                className="lg:leading-tighter text-MainHeading font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]"
              >
                Optimize Your DevOps with Acme
              </motion.h1>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="mx-auto max-w-[700px] text-SubHeading md:text-xl font-bold dark:text-gray-400">
                Accelerate your software delivery with our cutting-edge DevOps
                platform. Automate deployments, scale effortlessly and gain
                real-time insights.
              </p>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-[3/1] md:h-[60vh] h-[30vh] overflow-hidden rounded-t-xl object-cover"
            height="300"
            src={devops}
            width="1270"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
