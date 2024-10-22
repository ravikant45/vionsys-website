/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image"; // Import Image component for optimized images
import banner from "@/app/(LANDING_PAGE)/ourservices/images/WebDevelopment/banner.jpg";
import { motion } from "framer-motion";

type HeroProps = {
  enquiryModal: boolean;
  setEnquiryModal: (show: boolean) => void;
};

const Banner: React.FC<HeroProps> = ({ enquiryModal, setEnquiryModal }) => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={banner}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative md:gap-y-2 z-10 text-center flex flex-col items-center justify-center px-4 py-32 sm:px-6 lg:px-8 w-full lg:max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="text-3xl font-extrabold text-white sm:text-5xl"
        >
          Let's Talk
          <strong className="block font-extrabold text-blue-500">
            {" "}
            Say Hello to Your New Website!{" "}
          </strong>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.4 },
            ease: "easeInOut",
          }}
          className="mt-4 max-w-3xl md:text-2xl text-white"
        >
          Your vision matters to us. Let’s connect and create a website that
          elevates your brand, drives traffic, and delivers measurable success.
        </motion.p>

        {/* Button */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            className="font-sans flex gap-2 items-center shadow-xl text-md text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue2 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            onClick={() => setEnquiryModal(!enquiryModal)}
          >
            Get Started Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
