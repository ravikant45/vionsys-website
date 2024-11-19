"use client";
import React from "react";
import Image from "next/image";
import ecommerceImageHero from "../../../../../public/assets/Industries/eCommerceSector/ecommerceImageHero.jpg";
import { motion } from "framer-motion";

const ecomHeroSection = () => {
  return (
    <section>
      <div className="overflow-hidden">
        <div className="w-full">
          <div className="md:h-[100vh] h-[80vh] flex justify-center items-center relative overflow-hidden bg-[#000]">
            <Image
              src={ecommerceImageHero}
              alt="Ecommerce Image"
              className="object-cover w-full h-full opacity-35"
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
              <h1 className="text-orange font-extrabold text-MainHeading md:text-5xl text-3xl mb-4 capitalize">
                E-commerce Sector
              </h1>
              <p className="lg:text-xl text-Paragraph text-white max-w-3xl">
                The e-commerce industry is constantly expanding and changing,
                driven by technological advancements and changing consumer
                preferences. Vionsys IT Solutions India Pvt Ltd provides
                complete IT solutions to suit the e-commerce industry, helping
                businesses improve online presence, improve efficiency and
                deliver better customer experience Our core offerings include
                e-commerce websites development, mobile app development, e-.
                Trading platform integration, cloud services, analytics and
                business intelligence, security and fraud prevention
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ecomHeroSection;
