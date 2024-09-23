"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section>
      <div className="bg-gray-100 flex flex-col sm:flex-row items-center justify-center gap-2 p-4 md:p-10">
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="text-xl md:text-2xl font-semibold animate-pulse ease-out duration-1000 bg-gradient-to-l from-black to-blue-950 bg-clip-text text-transparent"
        >
          Ready to transform your business? Contact us today to get started!
        </motion.h3>
        <div className="text-4xl font-bold animate-pulse ease-out duration-1000 text-black">
          <Link href="../app">
            <FaArrowRightLong color="#215CBC" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
