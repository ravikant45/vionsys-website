"use client";
import React from "react";
import { motion } from "framer-motion";
import Security from "../../../../public/assets/Home/Security.jpg";
import Business_System from "../../../../public/assets/Home/Protect_Business.jpeg";
import ComputerMan from "../../../../public/assets/Home/ComputerMan.jpg";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <main className="bg-dot-slate-300">
      <section className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <motion.h3
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="font-extrabold text-MainHeading"
              >
                Why Choose Us?
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="text-SubHeading font-bold mt-4"
              >
                Ensure the protection of your brand with our Cybersecurity & IT
                Solutions
              </motion.h4>
              <motion.ol
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }}
                className="mt-2"
              >
                <li className="mt-3 hover-effect">
                  <b>Skills: </b>Our talented team specializes in various areas
                  of IT, including web design, UI/UX design, branding, digital
                  marketing, software development, graphic design, SEO, and
                  online advertising.
                </li>
                <li className="mt-3 hover-effect">
                  <b>Quality Assurance: </b>We uphold high-quality standards
                  through rigorous testing and control processes to exceed
                  customer expectations.
                </li>
                <li className="mt-3 hover-effect">
                  <b>Timely Deliveries: </b>We prioritize timely deliveries,
                  ensuring all services are completed on schedule without
                  compromising quality.
                </li>
                <li className="mt-3 hover-effect">
                  <b>Well-Designed Plan: </b>Using agile methodologies, we
                  streamline business processes to deliver on-time, on-budget
                  solutions, helping businesses save time and effort.
                </li>
              </motion.ol>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end md:px-3">
              <Image
                className="object-cover md:p-0 p-3 mb-6 rounded shadow-2xl shadow-blue-300 md:h-28 h-full sm:h-48 xl:h-56 md:w-28 w-full sm:w-48 xl:w-56 hover-effect"
                src={ComputerMan}
                alt="Person working on computer"
              />
              <Image
                className="object-cover md:p-0 p-3 md:w-40 w-full md:h-40 h-full rounded shadow-2xl shadow-blue-300 sm:h-32 xl:h-40 sm:w-32 xl:w-40 hover-effect"
                src={Business_System}
                alt="Business system interface"
              />
            </div>
            <div className="px-3">
              <Image
                className="object-cover md:w-40 w-0 md:h-40 h-0 rounded shadow-2xl shadow-blue-300 sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover-effect"
                src={Security}
                alt="Cybersecurity concept"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChoose;
