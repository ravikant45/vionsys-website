"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import choose1 from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/choose1.jpg";
import choose2 from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/choose2.jpg";
import choose3 from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/choose3.jpg";
import choose4 from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/choose4.jpg";
import choose5 from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/choose5.jpg";
import choose6 from "@/app/(LANDING_PAGE)/landingpage/images/ITStaffing/choose6.jpg";
import {
  FaGlobeAsia,
  FaUsers,
  FaHandshake,
  FaUserCheck,
  FaProjectDiagram,
} from "react-icons/fa";
import Image from "next/image";

const ChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const choose = [
    {
      id: 1,
      image: choose1,
      icons: <FaGlobeAsia className="w-8 h-8" />,
      title: "A Leading IT Staffing & Consulting Firm Across India & Globally",
      description:
        "We specialize in providing outstanding IT staffing solutions, ensuring your business has access to top talent that drives success.",
    },
    {
      id: 2,
      image: choose2,
      icons: <FaUsers className="w-8 h-8" />,
      title: "Streamlined Processes for Quick and Effective Talent Placement",
      description:
        "Our efficient recruitment processes guarantee fast and accurate placements, reducing downtime and boosting your team’s productivity.",
    },
    {
      id: 3,
      image: choose3,
      icons: <FaHandshake className="w-10 h-10" />,
      title: "Happy Clients & High Retention in IT Contract Staffing",
      description:
        "Our commitment to delivering exceptional services has resulted in satisfied clients and high retention rates, fostering long-term partnerships.",
    },
    {
      id: 4,
      image: choose4,
      icons: <FaUserCheck className="w-8 h-8" />,
      title: "Proven Success in Over 300+ Projects",
      description:
        "With a successful track record across 300+ projects, we are your reliable partner for securing the best IT talent to fuel your business growth.",
    },
    {
      id: 5,
      image: choose5,
      icons: <FaProjectDiagram className="w-8 h-8" />,
      title: "Comprehensive Recruitment and Selection Process",
      description:
        "We meticulously screen and select the best candidates, ensuring they meet your specific project requirements and deliver results.",
    },

    {
      id: 6,
      image: choose6,
      icons: <FaProjectDiagram className="w-8 h-8" />,
      title: "Comprehensive Recruitment and Selection Process",
      description:
        "We meticulously screen and select the best candidates, ensuring they meet your specific project requirements and deliver results.",
    },
  ];

  return (
    <section className="">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <div className="lg:text-center">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="font-extrabold text-MainHeading mt-2 leading-8 tracking-tight"
            >
              Why choose Vionsy IT Solutions as your IT staffing partner?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-SubHeading font-bold my-5 max-w-2xl lg:mx-auto"
            >
              Your Trusted Partner – Let's Succeed Together
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-12 justify-end md:gap-8 gap-y-2">
            {choose.map((item) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }} //X:100
                whileInView={{ opacity: 1, scale: 1 }} //y:100
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }}
                key={item.id}
                className="col-span-12 md:col-span-4"
              >
                <div className="rounded-[20px] bg-gray-100 p-2 lg:p-6 relative">
                  <div className="w-[70px] h-[70px] bg-white text-blue-600 rounded-xl text-[32px] inline-flex items-center justify-center mb-4">
                    {item.icons}
                  </div>
                  <h4 className="font-heading md:ml-6 ml-3 text-lg leading-6 font-bold text-gray-700">
                    {item.title}
                  </h4>
                  <p className="mt-2 md:ml-6 ml-3 text-base text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div> */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {choose.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative">
                  {/* Image that darkens on hover */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-52 object-cover transition-opacity duration-300 ${
                      hoveredCard === item.id ? "opacity-75" : "opacity-100"
                    }`}
                  />
                  {/* Overlay to darken the image */}
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                      hoveredCard === item.id ? "opacity-100" : "opacity-70"
                    }`}
                  ></div>
                </div>

                {/* Text that is always visible */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
