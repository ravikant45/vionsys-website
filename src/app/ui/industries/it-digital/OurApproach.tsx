"use client";

import itData from "@/utils/ItData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OurApproach = () => {
  return (
    <>
      {/* Description Section */}
      <section className="py-6 md:pt-8 space-y-3">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="text-MainHeading text-center font-extrabold px-4"
        >
          Strategic Approaches to IT Modernization
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="max-w-[70rem] text-paragraph text-center mx-auto px-4"
        >
          Staying ahead in today’s rapidly changing digital landscape requires
          more than just keeping up with technological advancements; It requires
          comprehensive changes including technology, processes, and people.
          Vionsys IT Solutions India Pvt Ltd offers comprehensive IT Digital
          Transformation services that enable businesses to adapt, grow, and
          thrive in the digital age.
        </motion.p>
      </section>

      {/* the static section for Our Approach  */}
      <section>
        <div className="flex flex-col justify-center items-center font-bold md:py-2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="text-3xl text-orange font-extrabold"
          >
            Our Approach
          </motion.h2>
        </div>

        <div className="z-0 bg-transparent md:p-10 px-1">
          {itData.map((section, index) => (
            <div
              key={section.id}
              className="w-full px-2 grid md:grid-cols-2 gap-4 grid-cols-1 md:py-6 py-2"
            >
              <div
                className={`flex justify-center items-center ${
                  index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"
                }`}
              >
                <Image
                  src={section.imageSrc}
                  className="rounded-2xl"
                  alt={section.title}
                  width={500}
                  height={500}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className={`flex flex-col justify-center gap-2 md:p-10 p-2 ${
                  index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"
                }`}
              >
                <h2 className="text-2xl text-black font-bold">
                  {section.id}. {section.title}
                </h2>
                <ul className="bg-white rounded-lg md:w-full w-full text-paragraph font-medium list-inside list-disc md:h-auto">
                  {section.items.map((item, idx) => (
                    <motion.li
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.4 },
                        ease: "easeInOut",
                      }}
                      key={idx}
                      className="md:px-6 px-2 py-2 border-b border-gray-400 w-full rounded-t-lg hover:bg-blue-300 list-disc"
                    >
                      <span className="font-bold">{item.text}</span>{" "}
                      {item.description}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurApproach;
