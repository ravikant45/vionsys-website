"use client";
import React from "react";
import { motion } from "framer-motion";

const styles = [
  {
    id: 1,
    title: "Extensive Network",
    para: "Quickly connect with a vast network of IT professionals and industry partners.",
  },
  {
    id: 2,
    title: "Industry Expertise",
    para: "Benefit from our recruiters' deep understanding of IT trends and challenges.",
  },
  {
    id: 3,
    title: "Personalized Service",
    para: "Receive customized staffing solutions that align with your business objectives and culture.",
  },
  {
    id: 4,
    title: "Proven Track Record",
    para: "Leverage our history of success in delivering results across diverse industries.",
  },
  {
    id: 5,
    title: "Quality Assurance",
    para: "Access top-tier talent through our rigorous screening and vetting process.",
  },
  {
    id: 6,
    title: "Dedicated Support",
    para: "Enjoy personalized support from dedicated account managers and responsive customer service.",
  },
  {
    id: 7,
    title: "Flexibility",
    para: "Customize staffing solutions to meet your specific needs.",
  },
  {
    id: 8,
    title: "Client-Centric Approach",
    para: "Experience a commitment to building trust-based, transparent and mutually successful partnerships.",
  },
  {
    id: 9,
    title: "Innovation",
    para: "Stay ahead with cutting-edge recruitment technologies and innovative sourcing strategies.",
  },
];

export interface Key {
  id: number;
  title: string;
  para: string;
}

function choose() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 20 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="md:text-MainHeading text-2xl text-center text-[#e57e2c] font-extrabold"
      >
        Why Choose Us for Your IT Staffing Needs?
      </motion.h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-4 p-6 justify-center">
          {styles.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 flex-grow rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12 relative overflow-hidden group"
            >
              <div className="bg-blue5 border-blue5 absolute inset-0 transition-transform duration-300 transform translate-x-[-99%] group-hover:translate-x-0"></div>
              <div className="text-base font-medium text-black relative z-10 group-hover:text-white group-hover:font-bold">
                {item.title}
              </div>
              <div className="text-gray-900 text-sm group-hover:text-white pt-1 relative z-10">
                <span>{item.para}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default choose;
