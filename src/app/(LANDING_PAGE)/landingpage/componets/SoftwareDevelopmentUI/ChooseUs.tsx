"use client";
import React from "react";
import { motion } from "framer-motion";

function ChooseUs() {
  return (
    <section >
      <div className="text-center md:py-12 px-2 py-6 overflow-x-hidden">
        <motion.h6 
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut"
        }}
        className=" md:text-MainHeading text-SubHeading text-Heading-sm font-extrabold tracking-tight capitalize">
          Why choose us ???
        </motion.h6>

        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div className="flex md:contents flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="relative p-4 my-6  shadow-xl shadow-slate-300 rounded-xl col-start-2 col-end-5 mr-auto md:mr-0 md:ml-auto"
            >
              <h3 className="text-lg font-semibold text-orange lg:text-xl">
                Skilled & Experienced Team
              </h3>
              <p className="mt-2 md:text-Para text-slate-500 text-Para-sm leading-6">
                Our team of seasoned professionals brings deep expertise and
                innovative solutions to every project, ensuring exceptional
                results tailored to your business needs.
              </p>
            </motion.div>
            <div className="relative hidden md:block col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-blue4 rounded-t-full bg-gradient-to-r from- to-red-300"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-green1 border-4 border-blue5 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative hidden md:block col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-blue4"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-green1 border-4 border-blue5 rounded-full top-1/2"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="relative p-4 my-6 shadow-xl shadow-slate-300 rounded-xl col-start-6 col-end-9 mr-auto"
            >
              <h3 className="text-lg text-orange font-semibold lg:text-xl">
                Quality Assurance
              </h3>
              <p className="mt-2 md:text-Para text-slate-500 text-Para-sm leading-6">
                We ensure top-tier quality through rigorous testing and
                attention to detail, delivering reliable and high-performing
                solutions that meet the highest industry standards.
              </p>
            </motion.div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="relative p-4 my-6 md:my-0 shadow-xl shadow-slate-300 border-blue2 rounded-xl col-start-2 col-end-5 mr-auto md:mr-0 md:ml-auto"
            >
              <h3 className="text-lg text-orange font-semibold lg:text-xl">
                Client-Centric Process
              </h3>
              <p className="mt-2 md:text-Para text-slate-500 text-Para-sm leading-6">
                Rest assured with our dedicated support team available round the
                clock to assist you whenever you need it ensuring minimal
                downtime and maximum productivity.
              </p>
            </motion.div>
            <div className="relative hidden md:block col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-blue4 rounded-t-full bg-gradient-to-b from-blue7 to-blue7"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3  bg-green1 border-4 border-blue4 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative hidden md:block col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-blue3"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-green1 border-4 border-blue4 rounded-full top-1/2"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="relative p-4 my-6 shadow-xl shadow-slate-300 rounded-xl col-start-6 col-end-9 mr-auto"
            >
              <h3 className="text-lg text-orange  font-semibold lg:text-xl">
                Innovative Technology
              </h3>
              <p className="mt-2 text-slate-500 md:text-Para text-Para-sm leading-6">
                Stay ahead of the curve with our utilization of the latest cloud
                technologies, guaranteeing that your business remains
                competitive and adaptable.{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
