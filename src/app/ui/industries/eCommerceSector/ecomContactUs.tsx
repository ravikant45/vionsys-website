"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const ecomContactUs = () => {
  return (
    <section id="section3">
      <div className="md:py-12 p-4 text-center md:px-40 overflow-x-hidden bg-gray-100">
        <motion.h1
          initial={{ opacity: 0.0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="md:text-MainHeading text-CardHeading font-extrabold md:py-2 py-1 capitalize"
        >
          Partner with Vionsys IT Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="md:text-Paragraph text-Paragraph-sm py-3"
          >
          Vionsys IT Solutions India Pvt. Transform your e-commerce operations
          by Our flagship IT solutions help e-commerce organizations achieve
          operational efficiencies, drive innovation and deliver exceptional
          customer experiences. Contact us today to learn how we can help your
          business survive in a competitive eCommerce industry.
        </motion.p>
        <motion.div
          initial={{ opacity: 0.0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center"
        >
          <Link href="/contact">
            <button className="bg-orange rounded-[7px] text-white px-5 py-3 font-headingFont text-sm  transition-all duration-150 ease-linear hover:bg-zinc-600">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ecomContactUs;
