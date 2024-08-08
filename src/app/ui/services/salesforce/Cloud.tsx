"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { MdOutlineCloud } from "react-icons/md";
import cloudback from "/public/assets/services/Salesforce/cloudback.jpg";

function Cloud() {
  return (
    <div className="bg-white">
      <div className="bg-black relative bg-contain border-t-8 border-blue-500 rounded-3xl ">
        <Image
          src={cloudback}
          alt=""
          className="lg:h-[70vh] h-auto lg:w-screen w-auto opacity-45 overflow-x-hidden"
        />
        <div className="absolute inset-0 flex justify-center items-center flex-col text-white ">
          <h1 className="md:text-5xl text-xl font-bold text-white text-center">
            Salesforce Cloud
          </h1>
        </div>
      </div>
      <div className="max-w-screen px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className="mt-12"
        >
          <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="grid md:grid-cols-2 grid-cols-1 gap-x-8"
          >
            <li className="bg-gray-100 p-5 mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <MdOutlineCloud size={30} />
                  </div>
                </div>
                <div className="mt-1 ">
                  <h4 className="text-SubHeading leading-8 text-center font-semibold text-gray-900">
                    Sales Cloud
                  </h4>
                  <p className="my-2 text-paragraph leading-6 ">
                    Transform your sales process with Sales Cloud, a
                    comprehensive sales CRM platform that empowers your team to
                    sell smarter and faster. From lead management to pipeline
                    forecasting, Sales Cloud provides the tools you need to
                    close deals and drive revenue.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 mb-20">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <MdOutlineCloud size={30} />
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-SubHeading leading-6 text-center font-semibold text-gray-900">
                    Service Cloud
                  </h4>
                  <p className="my-2 text-paragraph leading-6 text-gray-500">
                    Empower your customer service team with Service Cloud to
                    deliver unparalleled customer experiences. This robust
                    platform allows you to assist customers through various
                    channels, expedite issue resolution with AI-driven tools and
                    foster enduring customer connections.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 mb-20 md:mb-0">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <MdOutlineCloud size={30} />
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-SubHeading leading-8 text-center font-semibold text-gray-900">
                    Marketing Cloud
                  </h4>
                  <p className="my-2 text-paragraph leading-6 text-gray-500">
                    Engage customers at every touchpoint with Marketing Cloud.
                    This integrated marketing platform allows you to create
                    personalized, data-driven marketing campaigns, automate
                    customer journeys and measure the impact of your marketing
                    efforts.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <MdOutlineCloud size={30} />
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-SubHeading leading-8 text-center font-semibold text-gray-900">
                    Platform and App Cloud
                  </h4>
                  <p className="my-2 text-paragraph leading-6 text-gray-500">
                    Customize and extend Salesforce to fit your unique business
                    needs with Platform and App Cloud. Build custom
                    applications, integrate with third-party systems and extend
                    the power of Salesforce with low-code development tools.
                  </p>
                </div>
              </div>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Cloud;
