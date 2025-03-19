"use client";
import React from "react";
import { services } from "@/utils/bankingservice";
import { motion } from "framer-motion";

const Ourservice: React.FC = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        <h2 className="font-bold text-MainHeading text-center border-t-4 py-8  border-blue-600">
          Our Banking Services
        </h2>
        {services.map((service, index) => (
          <section className="bg-grid-blue-100 py-5">
            <React.Fragment key={index}></React.Fragment>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 20 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="font-semibold text-SubHeading text-center md:mx-72 md:my-10 bg-blue-100 rounded-md"
            >
              {service.title}
            </motion.h2>
            {/* Main section*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="border-t-4 border-blue-600 py-1 w-14" />
                <h3 className="font-semibold leading-5 mb-4">{service.sub1}</h3>
                <p className="text-cardPara">{service.desc1}</p>
              </motion.div>
              {/* Second card */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="border-t-4 border-blue-600 py-1 w-14" />
                <h2 className="font-semibold leading-5 mb-4">{service.sub2}</h2>
                <p className="text-cardPara">{service.desc2}</p>
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
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="border-t-4 border-blue-600 py-1 w-14" />
                <h2 className="font-semibold leading-5 mb-4">{service.sub3}</h2>
                <p className="text-cardPara">{service.desc3}</p>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Ourservice;
