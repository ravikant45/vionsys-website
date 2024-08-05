"use client"
import React from "react";
import Image from "next/image";
import InsuranceHero from "../../../../../public/assets/Industries/insuranceSector/InsuranceHero.jpg";
import { motion } from "framer-motion";
const InsuranceHeroSection = () => {
  return (
    <section>
      <div className="overflow-hidden">
        <div className="w-full">
          <div className="md:h-[100vh] h-[80vh] flex justify-center items-center relative overflow-hidden bg-[#000]">
            <Image
              src={InsuranceHero}
              alt="heroimg"
              className="object-cover w-full h-full opacity-60"
              quality={100}
            />
            <motion.div
              initial={{ opacity: 0.0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 lg:px-32 xl:px-48"
            >
              <h1 className="text-orange md:text-5xl text-3xl font-bold mb-4 capitalize">
                Insurance Sector
              </h1>
              <p className="lg:text-xl text-Paragraph text-white max-w-3xl">
                The insurance industry is undergoing a major transformation, due
                to changing digital innovations, changing customer expectations
                and stringent regulatory requirements Vionsys IT Solutions India
                Pvt Ltd provides expert IT services to the insurance industry,
                helping organizations for business efficiencies increase,
                improve customer experience and ensure compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHeroSection;
