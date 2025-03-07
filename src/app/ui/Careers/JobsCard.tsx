"use client";
import React from "react";
import { motion } from "framer-motion";
import { Jobs } from "./JobsData";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function JobsCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:pt-8 pt-3">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="text-MainHeading font-extrabold md:text-start text-center"
        >
          Your Future Begins Here
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 20 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="font-bold text-SubHeading"
        >
          Current Openings
        </motion.h2>
      </div>
      <div className="w-full px-4">
        <HoverEffect items={Jobs} />
      </div>
    </>
  );
}
