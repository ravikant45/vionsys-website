import React from "react";
import { motion } from "framer-motion";

const CrmCta = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#215CBC] py-10 md:px-8 px-4 my-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full md:px-4 lg:w-1/2">
            <div className="text-center lg:text-left ">
              <div className="mb-10 lg:mb-0 ">
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 0.4 },
                    ease: "easeInOut",
                  }}
                  className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white"
                >
                  Boost Customer Relationships with Our CRM Solutions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 0.4 },
                    ease: "easeInOut",
                  }}
                  className="w-full text-base font-medium leading-relaxed md:text-xl sm:leading-relaxed text-white"
                >
                  Manage leads, automate tasks, and enhance customer experience
                  with a powerful CRM system.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="w-full md:px-4 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 40 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-center lg:text-right"
            >
              <a
                className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                href="#"
              >
                Begin Your Transformation
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <span className="absolute top-0 right-0 -z-10">
        <svg
          width="388"
          height="250"
          viewBox="0 0 388 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6910)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_971_6910"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.520507" stop-color="white"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute top-0 left-0 -z-10">
        <svg
          width="324"
          height="250"
          viewBox="0 0 324 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
            fill="url(#paint0_linear_971_6911)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_971_6911"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.520507" stop-color="white"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </span>
    </section>
  );
};

export default CrmCta;
