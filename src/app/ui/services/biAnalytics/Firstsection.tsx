"use client";
import React from "react";
import { BiAndAnalyticsData } from "@/app/ui/services/data/BiAndAnalytics";
import { motion } from "framer-motion";
import Link from "next/link";
const Firstsection = () => {
  return (
    <div>
      <section
        className="overflow-x-hidden bg-gray-100
      "
      >
        <motion.div
          initial={{ opacity: 0.0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 md:py-10 py-4 md:h-[400px] h-auto"
        >
          <div className="flex flex-col h-full justify-center items-center gap-4">
            <h1 className="md:text-[45px] text-MainHeading font-semibold text-center bg-gradient-to-r to-danger bg-clip-text capitalize text-transparent from-purple-800 via-blue-800 to-pink-600">
              {BiAndAnalyticsData.mainTitle}
            </h1>
            <p className="text-center md:px-32 md:text-lg text-base">
              {BiAndAnalyticsData.subTitle}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Firstsection;
