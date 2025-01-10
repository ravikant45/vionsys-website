import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const SecondVirtualSection = () => {
  return (
    <section className="relative flex w-full h-screen md:h-auto bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        priority
        quality={100}
        className="absolute object-cover w-full h-full opacity-30 md:opacity-100"
        src="/assets/VEmployee/VemployeeImage.jpg"
        alt="Software Development Management"
        layout="fill"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-700 to-transparent opacity-90 rounded-md"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-4 px-4 py-8  md:gap-6 lg:gap-8 md:px-8 lg:px-16 lg:py-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="text-xl md:text-4xl font-bold tracking-tight text-orange"
        >
          Software Development Management
        </motion.h2>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="text-sm md:text-lg font-bold text-white"
        >
          We ensure seamless and efficient software solutions through our unique
          approach.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="max-w-xl text-xs sm:text-sm md:text-base text-gray-200"
        >
          Efficient delivery methodologies to optimize value and productivity,
          leveraging cutting-edge technology combined with our expertise to
          maximize project outcomes. Our dedicated project model provides the
          right enablers for fast, innovative solutions.
        </motion.p>

        {/* List Items */}
        <ul className="mt-2 text-xs sm:text-sm md:text-base text-gray-200 space-y-4">
          {[
            "Instant access to over 500+ developers skilled in 150+ technologies.",
            "Flexible pricing options offer substantial cost savings.",
            "Comprehensive IP protection backed by stringent security protocols.",
          ].map((text, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.4 },
                ease: "easeInOut",
              }}
              className="flex items-center space-x-4"
            >
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-opacity-50 bg-black">
                <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange" />
              </div>
              <span>{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SecondVirtualSection;
