import Image from "next/image";
import React from "react";
import { FaChalkboardTeacher, FaRegHandshake } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaChalkboardTeacher className="w-6 h-6 md:w-7 md:h-7 text-white" />,
    text: "Expertise in Software Development for SMEs",
  },
  {
    icon: <FaRegHandshake className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    text: "Extensive IT Problem-Solving Experience - Over 1 decade of expertise",
  },
  {
    icon: <GoProjectSymlink className="w-6 h-6 md:w-7 md:h-7 text-white" />,
    text: "Innovative Technology Leadership",
  },
  {
    icon: <PiCertificate className="w-6 h-6 md:w-7 md:h-7 text-white" />,
    text: "Seamlessly Connected Talent Pool - Remote developers, programmers, and solution architects",
  },
];

const VEmployeeInfra = () => {
  return (
    <section className="relative flex w-full md:h-screen items-end justify-end bg-black overflow-hidden">
      <Image
        priority
        quality={100}
        className="absolute object-fit w-[80%] h-full opacity-30 md:opacity-100"
        src="/assets/VEmployee/VEmployeeInfra.jpg"
        alt="VEmployee Infrastructure"
        layout="fill"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-700 to-transparent opacity-90 rounded-md"></div>

      <div className="relative z-10 flex flex-col gap-4 px-4 md:gap-6 lg:gap-8 py-8 md:py-12 lg:px-16 lg:py-16">
        <h2 className="text-orange font-semibold text-xl md:text-4xl lg:pr-[36rem] mb-4">
          Vionsys significantly enhances the value of your technology
          infrastructure.
        </h2>

        <div className="md:space-y-5 space-y-2 text-white text-base sm:text-lg md:text-xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2 * index,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md bg-opacity-50 bg-black">
                {feature.icon}
              </div>
              <div className="ml-4">
                <p>{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VEmployeeInfra;
