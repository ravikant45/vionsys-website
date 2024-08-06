"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const InsuranceContactUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <motion.div initial={{ opacity: 0.0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <div className="lg:text-center">
          <p className="mt-2 font-extrabold text-MainHeading text-center sm:text-4xl leading-8 tracking-tight  text-gray-800">
            Partner with{" "}
            <span className="text-blue2">Vionsys IT Solutions</span>
          </p>
        </div>
        <p className="max-w-3xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Transform your insurance operations with Vionsys IT Solutions India
          Pvt Ltd. Our specialized IT solutions help insurers achieve
          operational excellence, promote innovation, and provide exceptional
          client experiences. Contact us today to find out how we can help your
          company prosper in today's ever-changing insurance landscape
        </p>
        <Link href="/contact" passHref>
          <Button className="text-lg m-5">Contact Us</Button>
        </Link>{" "}
      </motion.div>
    </section>
  );
};

export default InsuranceContactUs;
