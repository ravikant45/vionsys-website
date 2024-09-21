"use client";
import {
  FaHospital,
  FaNetworkWired,
  FaShoppingCart,
  FaIndustry,
  FaGraduationCap,
  FaLandmark,
  FaFilm,
  FaCar,
  FaBolt,
} from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { motion } from "framer-motion";

const industries = [
  { name: "Finance & Banking", icon: FaBuildingColumns },
  { name: "Healthcare", icon: FaHospital },
  { name: "Telecommunications", icon: FaNetworkWired },
  { name: "Retail & E-Commerce", icon: FaShoppingCart },
  { name: "Manufacturing", icon: FaIndustry },
  { name: "Education", icon: FaGraduationCap },
  { name: "Government", icon: FaLandmark },
  { name: "Entertainment & Media", icon: FaFilm },
  { name: "Automotive", icon: FaCar },
  { name: "Energy", icon: FaBolt },
];

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="font-extrabold text-MainHeading mb-4 text-center"
      >
        Industries We Serve
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="text-SubHeading font-bold mb-8 text-center"
      >
        Our staffing solutions cater to diverse industries, meeting their unique
        IT needs with proven expertise in sectors like:
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              key={industry.name}
              className="border rounded-lg px-6 py-3 flex flex-col items-center text-center"
            >
              <Icon className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-lg font-semibold">{industry.name}</h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
