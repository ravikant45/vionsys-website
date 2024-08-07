'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      <section className="bg-gray-50 w-[100vw] flex justify-center md:py-4 items-center overflow-x-hidden">
        {/* Final section contact us and schedule a meeting */}
        <div className="flex flex-col justify-center items-center py-4 gap-4 md:px-8 px-2 md:w-[80%]">
          <motion.h2
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="text-SubHeading font-bold"
          >
            Partner with Vionsys IT Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="text-xl text-blue1 font-semibold text-center"
          >
            Vionsys IT Solutions India Pvt. Transform your telecom operations
            with Our flagship IT solutions empower telecom companies to drive
            operational efficiencies, drive innovation and deliver better
            customer experiences. Contact us today to learn how we can help your
            organization thrive in a dynamic telecommunications environment.
          </motion.p>
          <div className="flex md:gap-4 gap-2 justify-center items-center flex-wrap">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
