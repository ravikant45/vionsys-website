"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function HeroSec() {
  return (
    <section className="w-[100vw] md:h-screen sm:[60vh] h-[50vh]">
      <div className="w-full h-full relative">
        <Image
          src="/assets/Industries/health/health.jpg"
          width={1000}
          height={1000}
          alt="Health care Services"
          className="w-full h-full opacity-85 z-0"
        />
        <div className="bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-center w-full md:px-4 px-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              scale: { type: "spring", stiffness: 30 },
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="md:w-[80%] px-2 py-5 bg-black bg-opacity-30 border-x-4 border-orange rounded-3xl text-center w-full"
          >
            <h1 className="font-bold md:text-4xl text-xl">
              Revolutionizing Healthcare
              <br />
              <span className="md:text-2xl text-xl">
                Vionsys IT Solutions Advanced IT Solutions for Enhanced Patient
                Care and Operational Efficiency
              </span>
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
