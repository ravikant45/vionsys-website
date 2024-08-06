"use client";
import React from "react";
import Image from "next/image";
import { InsuranceServices } from "@/utils/InsuranceServices";
import { motion } from "framer-motion";

const InsuranceOurServices = () => {
  return (
    <section className="bg-slate-100 py-10 overflow-x-hidden">
      <div className="text-center mb-8">
        <p className="font-extrabold text-MainHeading text-center sm:text-4xl leading-8 tracking-tight text-blue2">
          Our Services
        </p>
      </div>
      {InsuranceServices.map((InsuranceServices, index) => (
        <div key={index} className="grid gap-8 p-5 md:grid-cols-2">
          <div
            className={`flex justify-center items-center order-1 md:order-${
              index % 2 === 0 ? "1" : "2"
            }`}
          >
            <Image
              src={InsuranceServices.image}
              alt={InsuranceServices.title}
              className="rounded-lg shadow-lg"
              quality={100}
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
          <div
            className={`flex flex-col justify-center order-2 md:order-${
              index % 2 === 0 ? "2" : "1"
            }`}
          >
            <motion.h1
              initial={{ opacity: 0.0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="font-extrabold text-MainHeading mb-4 text-orange"
            >
              {InsuranceServices.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0.0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <ul className="space-y-4 text-paragraph font-medium">
                {InsuranceServices.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="px-2 py-2 border-b border-gray-300 hover:bg-blue-100 rounded-lg text-gray-700"
                  >
                    <span className="font-bold text-black">
                      {point.heading} :
                    </span>{" "}
                    {point.description}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InsuranceOurServices;
