"use client";
import { motion } from "framer-motion";
import React from "react";
import QualityAssuranceImage from "/public/assets/services/Testing/QAassurance.jpg";
import Image from "next/image";
const Chooseus = () => {
  return (
    <div>
      <section className="w-[100vw]">
        <div className="w-full flex flex-col gap-8 justify-center items-center md:px-4 md:py-6 py-3 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="md:text-3xl text-xl font-extrabold text-orange"
          >
            Why Vionsys Excels as Your QA and Testing Partner?
          </motion.h2>
          <div className="w-full grid md:grid-cols-2 grid-cols-1  gap-4 md:px-12">
            {/* left side */}
            <div className="flex flex-col gap-2 text-base leading-8 justify-center">
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
              >
                We emerge as your top-tier QA and testing partner offering
                unparalleled expertise. With our commitment to excellence,
                bolstered by cutting-edge tools and meticulous methodologies, we
                ensure software reliability and deliver seamless user
                experiences that drive exceptional business success.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }}
                className="ml-4 list-disc"
              >
                <li>Expertise in QA and testing.</li>
                <li>Access to cutting-edge testing tools.</li>
                <li>Comprehensive QA solutions.</li>
                <li>Reliable and consistent results.</li>
              </motion.ul>
            </div>

            {/* right side */}
            <div className="md:px-8">
              <Image
                src={QualityAssuranceImage}
                alt="Quality Assurance Image"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chooseus;
