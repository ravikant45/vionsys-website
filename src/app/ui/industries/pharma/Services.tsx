"use client";
import { pharmaData } from "@/utils/pharmaData";
import Image from "next/image";
import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <section className="overflow-x-hidden">
        <div className="px-4 py-6 mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, scale: 1.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-SubHeading font-bold"
            >
              Our Services
            </motion.h2>
          </div>

          {/* Images and Content */}
          {pharmaData.map((service, index) => (
            <div
              key={index}
              className="md:flex md:justify-center md:py-6 md:items-start md:gap-12 mb-8"
            >
              <div
                className={`flex justify-center mb-8 md:mb-0 md:w-1/2 ${
                  index % 2 === 0 ? "order-1" : "order-2"
                }`}
              >
                <Image
                  src={service.imageSrc}
                  alt="Illustration"
                  className="rounded-lg"
                  width={450}
                  height={300}
                />
              </div>
              <div
                className={`md:w-1/2 flex flex-col items-center justify-center gap-4 ${
                  index % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 20 },
                    opacity: { duration: 0.4 },
                    ease: "easeInOut",
                  }}
                  className="text-ThirdHeading font-semibold"
                >
                  {service.title}
                </motion.h1>
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 30 },
                      opacity: { duration: 0.4 },
                      ease: "easeInOut",
                    }}
                  >
                    <div className="p-2 mr-4 text-white bg-blue3 rounded-full">
                      <BsCaretRightFill />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
