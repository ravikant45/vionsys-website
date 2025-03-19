"use client";
import React from "react";
import { services } from "@/utils/EcommerseServices"; // Make sure to update the path according to your project structure
import { motion } from "framer-motion";

const EcomOurServices = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="container mx-auto">
        <h2 className="font-extrabold text-MainHeading text-center border-b-4 py-8 border-gray-500">
          Our E-Commerce Services
        </h2>
        {services.map((service, index) => (
          <motion.section
            initial={{ opacity: 0.0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            key={index}
            className="bg-dot-blue-300 py-5"
          >
            <h3 className="font-semibold text-SubHeading text-center md:mx-72 md:my-10 bg-blue-100 rounded-md">
              {service.title}
            </h3>
            {/* Main section*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* First card */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:bg-gray-50 border-y-4  border-orange">
                <h4 className="font-semibold leading-5 mb-4 text-blue1">
                  {service.sub1}
                </h4>
                <p className="text-gray-700">{service.desc1}</p>
              </div>
              {/* Second card */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:bg-gray-50 border-y-4  border-orange">
                <h3 className="font-semibold leading-5 mb-4 text-blue1">
                  {service.sub2}
                </h3>
                <p className="text-gray-700">{service.desc2}</p>
              </div>
              {/* Third card */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:bg-gray-50 border-y-4 border-orange">
                <h3 className="font-semibold leading-5 mb-4 text-blue1">
                  {service.sub3}
                </h3>
                <p className="text-gray-700">{service.desc3}</p>
              </div>
              {/* Fourth card */}
              <div className="bg-white rounded-lg shadow-lg p-8 hover:bg-gray-50 border-y-4 border-orange">
                <h3 className="font-semibold leading-5 mb-4 text-blue1">
                  {service.sub4}
                </h3>
                <p className="text-gray-700">{service.desc4}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default EcomOurServices;
