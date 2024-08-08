"use client";
import React from "react";
import Image from "next/image";
import CRMF from "/public/assets/services/crm/CRMH.jpg";
import { motion } from "framer-motion";
const Firstsection = () => {
  return (
    <div>
      <div className="bg-black relative">
        <Image
          src={CRMF}
          alt=""
          className="md:w-[100vw] md:h-[100vh] h-[60vh] sm:[50vh] opacity-45"
          quality={100}
        />
        <div className="absolute bottom-4 px-3 flex justify-center items-center flex-col gap-2 transform text-white">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="md:text-5xl text-xl text-white font-extrabold text-center"
          >
            Customer Relationship Management (CRM)
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 20 },
              opacity: { duration: 0.4 },
              ease: "easeInOut",
            }}
            className="text-white italic md:text-xl text-sm"
          >
            Selecting Excellence: Elevate Your CRM Experience with Us.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="md:text-xl text-sm text-white md:px-52 mmd:px-10 px-3 sm:px-20 text-center"
          >
            Discover CRM excellence with our innovative methodology, blending
            precision and innovation for unparalleled success. Seamlessly
            integrating technology and data-driven insights, we propel
            businesses to enduring triumphs and elevate customer journeys.
            Experience the pinnacle of effective work, meticulously designed for
            sustained growth and unmatched satisfaction.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
