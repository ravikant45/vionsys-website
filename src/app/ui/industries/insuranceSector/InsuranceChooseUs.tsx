"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  FaIndustry,
  FaCog,
  FaRocket,
  FaLock,
  FaTachometerAlt,
  FaUserFriends,
} from "react-icons/fa";

const InsuranceChooseUs = () => {
  return (
    <section className="">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-extrabold text-MainHeading text-center font-heading mt-2 sm:text-4xl leading-8 tracking-tight text-blue2">
              Why Choose Vionsys ?
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <motion.div
                initial={{ opacity: 0.0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex items-start"
              >
                <FaIndustry className="text-blue-500 text-3xl lg:m-3 mt-1" />
                <div>
                  <p className="font-heading m-2 text-base sm:text-lg leading-6 font-bold text-orange">
                    Industry Expertise
                  </p>
                  <div className="m-2 text-sm sm:text-base text-gray-500">
                    Our staff has vast experience in the insurance industry and
                    understands the unique issues and requirements that insurers
                    confront.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex items-start"
              >
                <FaCog className="text-blue-500 text-3xl lg:m-3 mt-1" />
                <div>
                  <p className="font-heading m-2 text-base sm:text-lg leading-6 font-bold text-orange">
                    Customized Solutions
                  </p>
                  <div className="m-2 text-sm sm:text-base text-gray-500">
                    We provide IT solutions that are tailored to your individual
                    company objectives and operational requirements.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex items-start"
              >
                <FaRocket className="text-blue-500 text-3xl lg:m-3 mt-1" />
                <div>
                  <p className="font-heading m-2 text-base sm:text-lg leading-6 font-bold text-orange">
                    New Technologies
                  </p>
                  <div className="m-2 text-sm sm:text-base text-gray-500">
                    Using cutting-edge technology, we provide new solutions that
                    improve efficiency, performance, and growth.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex items-start"
              >
                <FaLock className="text-blue-500 text-3xl lg:m-3 mt-1" />
                <div>
                  <p className="font-heading m-2 text-base sm:text-lg leading-6 font-bold text-orange">
                    Security and Compliance Focus
                  </p>
                  <div className="m-2 text-sm sm:text-base text-gray-500">
                    Our commitment to security and compliance ensures that your
                    data and procedures are secure and satisfy regulatory
                    requirements.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex items-start"
              >
                <FaTachometerAlt className="text-blue-500 text-3xl lg:m-3 mt-1" />
                <div>
                  <p className="font-heading m-2 text-base sm:text-lg leading-6 font-bold text-orange">
                    Proven Track Record
                  </p>
                  <div className="m-2 text-sm sm:text-base text-gray-500">
                    With successful projects in the insurance industry, we have
                    the experience and expertise to produce dramatic results.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex items-start"
              >
                <FaUserFriends className="text-blue-500 text-3xl lg:m-3 mt-1" />
                <div>
                  <p className="font-heading m-2 text-base sm:text-lg leading-6 font-bold text-orange">
                    Customer-Centric Approach
                  </p>
                  <div className="m-2 text-sm sm:text-base text-gray-500">
                    We prioritize our clients' needs, providing continuous
                    support and ensuring our solutions align with their business
                    goals for success.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceChooseUs;
