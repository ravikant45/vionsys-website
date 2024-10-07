"use client";

import { GiRadioTower } from "react-icons/gi";
import { motion } from "framer-motion";
import companies1 from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/companies.png";
import Healthcare from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/Healthcare.png";
import Education from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/Education.png";
import eCommerce from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/eCommerce.png";
import construction from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/construction1.png";
import banking from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/banking.png";
import manufacturing from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/manufacturing.png";
import insurance from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/insurance.png";
import Entertainment from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/SectorIcons/Entertainment.png";
import Image from "next/image";

const industries = [
  { name: "IT Companies", icon: companies1 }, // Static image
  { name: "Healthcare Sector", icon: Healthcare }, // React icons
  { name: "Education", icon: Education },
  { name: "Finance & Banking", icon: banking },
  { name: "Construction", icon: construction },
  { name: "Retail & E-Commerce", icon: eCommerce },
  { name: "Manufacturing", icon: manufacturing },
  { name: "Insurance", icon: insurance },
  { name: "Telecommunications", icon: GiRadioTower },
  { name: "Entertainment & Media", icon: Entertainment },
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
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              key={industry.name}
              className="border group rounded-lg px-6 py-3 flex flex-col items-center text-center hover:scale-150 hover:bg-orange hover:text-white transition-colors duration-300"
            >
              {/* Conditionally render either Image or Icon based on the type */}
              {typeof Icon === "object" ? (
                <Image src={Icon} alt={industry.name} className="w-12 h-12 mb-4" />
              ) : (
                // TypeScript check ensures Icon is an IconType (React component)
                <Icon className="w-12 h-12 text-[#215CBC] mb-4" />
              )}
              <h2 className="text-lg font-semibold">{industry.name}</h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
