"use client";
import React from "react";
import { features } from "@/utils/professionalservice";
import { motion } from "framer-motion";
const Ourservices: React.FC = () => {
  return (
    <main>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl">
          <h2 className="max-w-lg text-MainHeading text-center font-bold tracking-tight sm:text-4xl md:mx-auto">
            Our Professional Services
          </h2>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2 bg-dot-slate-700 px-4 py-4">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="col-span-full text-center mb-4">
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", stiffness: 20 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                  className="max-w-lg bg-slate-100 rounded-2xl p-2 text-SubHeading font-bold leading-none tracking-tight md:mx-auto"
                >
                  {feature.title}
                </motion.h3>
              </div>
              {/* First card */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="duration-300 transform bg-white border-l-4 border-blue-700 hover:-translate-y-2"
              >
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    {feature.sub1}
                  </h6>
                  <p className="text-cardPara">{feature.desc1}</p>
                </div>
              </motion.div>
              {/* Second card */}
              <div className="duration-300 transform bg-white border-l-4 border-blue-700 hover:-translate-y-2">
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    {feature.sub2}
                  </h6>
                  <p className="text-cardPara">{feature.desc2}</p>
                </div>
              </div>
              {/* Third card */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="duration-300 transform bg-white border-l-4 border-blue-700 hover:-translate-y-2"
              >
                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                  <h6 className="mb-2 font-semibold leading-5">
                    {feature.sub3}
                  </h6>
                  <p className="text-cardPara">{feature.desc3}</p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Ourservices;
