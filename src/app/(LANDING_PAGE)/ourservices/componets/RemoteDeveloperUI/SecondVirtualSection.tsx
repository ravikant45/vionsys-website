import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PopUpProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const SecondVirtualSection = ({ showModal, setShowModal }: PopUpProps) => {
  return (
    <section className="relative flex w-full md:h-screen h-[50vh] bg-black overflow-hidden">
      <Image
        priority
        quality={100}
        className="absolute object-cover w-full h-full opacity-30 md:opacity-100"
        src="/assets/VEmployee/VemployeeImage.jpg"
        alt="Software Development Management"
        layout="fill"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-700 to-transparent opacity-90"></div>

      <div className="relative z-10 flex flex-col gap-4 px-4 py-8 md:gap-6 lg:gap-8 md:px-8 lg:px-16 lg:py-16">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
          className="text-xl md:text-4xl font-bold tracking-tight text-orange"
        >
          Software Development Management
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
          className="text-sm md:text-lg font-bold text-white"
        >
          We ensure seamless and efficient software solutions through our unique
          approach.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
          className="max-w-xl text-xs sm:text-sm md:text-base text-gray-200"
        >
          Efficient delivery methodologies optimize value and productivity,
          leveraging cutting-edge technology combined with our expertise to
          maximize project outcomes. Our dedicated project model provides the
          right enablers for fast, innovative solutions.
        </motion.p>

        <ul className="mt-2 text-xs sm:text-sm md:text-base text-gray-300 space-y-4">
          {[
            "Instant access to over 500+ developers skilled in 150+ technologies.",
            "Flexible pricing options offer substantial cost savings.",
            "Comprehensive IP protection backed by stringent security protocols.",
          ].map((text, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
              className="flex items-center space-x-4"
            >
              <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              <span>{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div
        className="absolute bottom-20 right-8 z-20 block"
      >
        <Button onClick={() => setShowModal(!showModal)}>
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default SecondVirtualSection;
