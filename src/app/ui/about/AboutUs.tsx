"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="w-screen lg:min-h-screen min-h-[60%]">
        <div className="lg:h-screen h-[400px] w-screen relative">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="/assets/About/AboutBg.mp4" type="video/mp4" />
          </video>

          <div className="lg:h-screen h-80 absolute z-1 w-full flex flex-col justify-center top-10 py-4 lg:items-start items-center">
            {/* Text Content with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mt-5 px-8 sm:mt-10 sm:px-20"
            >
              <h1 className="text-white font-medium text-2xl md:text-4xl lg:text-7xl">
                Ready To <br className="sm:hidden" />
                <span className="block">Transform Your Ideas </span>
                Into Reality?
              </h1>
            </motion.div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
