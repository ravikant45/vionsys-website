/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons"; // Import IconType for icons
import {FaLightbulb, FaPuzzlePiece, FaClipboardList , FaRocket } from "react-icons/fa"; // Added more icons

// Define type for the card info
type CardInfo = {
  icon: IconType; // IconType is used to type the icon component
  heading: string;
  description: string;
};

// Array of card data (this should be imported or declared here)
const cardData: CardInfo[] = [
  {
    icon: () => <FaClipboardList  size={25} className="text-white" />, // Award for evaluation
    heading: "We evaluate your project in detail",
    description:
      "Our team dives deep into your project to understand its unique aspects, ensuring our solutions are perfectly aligned with your goals.",
  },
  {
    icon: () => <FaLightbulb size={25} className="text-white" />, // Lightbulb for ideas
    heading: "We generate ideas",
    description:
      "By innovating together, we harness the collective creativity of our team to develop unique solutions tailored to your needs.",
  },
  {
    icon: () => <FaPuzzlePiece size={25} className="text-white" />, // Puzzle piece for execution
    heading: "We execute improvements",
    description:
      "Our team takes charge of executing enhancements that align with your vision and drive tangible results.",
  },
  {
    icon: () => <FaRocket size={25} className="text-white" />, // Rocket for results
    heading: "We drive impactful results.",
    description:
      "We prioritize impactful results, utilizing data-driven techniques that drive performance and elevate your brand's presence.",
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section>
      <div className="px-4 mx-auto sm:max-w-xl md:pb-12 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="md:text-MainHeading text-MainHeading-sm font-extrabold text-blue2"
            >
              How We Work
            </motion.p>
          </div>
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="max-w-lg mb-6 md:text-SubHeading text-SubHeading-sm font-bold capitalize md:mx-auto"
          >
            <span className="relative inline-block">
              <span className="relative">Moving</span>
            </span>{" "}
            Strategic Steps Towards Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="md:text-Para text-Para-sm"
          >
            Our methodology emphasizes flexibility, allowing us to adapt our
            strategies as your needs evolve. We blend creativity with analytical
            thinking, ensuring that we not only meet your current demands but
            also anticipate future challenges and opportunities.
          </motion.p>
        </div>

        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          {cardData.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="group max-w-md backdrop-blur-sm sm:mx-auto sm:text-center"
            >
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-blue3 group-hover:bg-orange sm:mx-auto sm:w-16 sm:h-16">
                <info.icon className="text-2xl" />
              </div>
              <h6 className="mb-3 md:text-CardHeading text-CardHeading-sm font-bold leading-5">
                {info.heading}
              </h6>
              <p className="mb-3 text-lg text-gray-900">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
