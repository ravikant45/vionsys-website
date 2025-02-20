"use client";
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";
import React, { useEffect } from "react";
import "./page1.css";
import { motion } from "framer-motion";

const Page = () => {
  const data = webdevServicesData;

  useEffect(() => {
    const bgAnimation: HTMLElement | null =
      document.getElementById("bgAnimation");
    if (bgAnimation) {
      const numberOfColorBoxes = 400;
      for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = document.createElement("div");
        colorBox.classList.add("colorBox");
        bgAnimation.append(colorBox);
      }
    }
  }, []);

  const Firstsec = () => {
    return (
      <div>
        {/*first section */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md py-4 md:h-screen sm:h-[80vh] px-2 md:px-6 gap-4">
          <div className="bgAnimation" id="bgAnimation">
            <div className="backgroundAnim"></div>
          </div>
          <div>
            <motion.div
              className=""
              initial={{ opacity: 0.0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <h1 className="relative z-10 md:text-3xl text-xl mx-auto max-w-xl shadow-md shadow-gray-200 text-gray-800 font-extrabold bg-gradient-to-r from-yellow-500 to-orange p-1 rounded-lg tracking-wider leading-9 text-center capitalize">
                {data?.headline}
              </h1>
              <p className="relative z-10 p-5 md:text-xl sm:text-base text-white text-center  mx-auto">
                {data?.paragraph}
              </p>
            </motion.div>
          </div>
        </section>
        {/* Service section */}
        <section className="services_look bg-white py-3">
          <div className="flex justify-center items-center py-6">
            <h1 className="md:text-4xl text-3xl font-bold text-orange leading-tight mb-2 border-t-4 border-b-4 border-blue3">
              Our Services
            </h1>
          </div>
          <p className="relative md:px-5 px-2 z-10 text-paragraph text-gray-600 text-center">
            Unlock your business's potential with our expert software
            development services, crafting tailored solutions to fit your needs
            and keeping you ahead in today's digital landscape.
          </p>
          <motion.div
            initial={{ opacity: 0.0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-wrap gap-4 md:p-8 p-2 justify-center"
          >
            {data?.Services?.map((ser: any) => (
              <div
                className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"
                key={ser.title}
              >
                <div className="border border-gray-300 rounded-lg transition-transform hover:scale-105">
                  <div className="p-8 flex flex-col items-center">
                    <div className="p-3 rounded-full w-12 h-12 bg-blue-500 flex justify-center items-center mb-4">
                      <ser.logo color="white" size={25} />
                    </div>
                    <div className="text-center">
                      <h3 className="mb-4 text-xl font-bold text-black">
                        {ser?.title}
                      </h3>
                      <p className="text-base font-medium text-body-color">
                        {ser?.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    );
  };

  return <Firstsec />;
};

export default Page;
