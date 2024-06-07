"use client";
import {
  businessPackBenefits,
  proPackBenefits,
  starterPackBenefits,
} from "@/utils/PricingDetails";
import React from "react";
import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <div className="relative w-full md:h-auto">
      <div className="absolute hidden w-full bg-gray-50 lg:block md:h-96" />
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -100 }} //X:100
            whileInView={{ opacity: 1, y: 0 }} //y:100
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="max-w-lg mb-6 leading-none tracking-tight text-MainHeading font-bold md:mx-auto"
          >
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Inexpensive Website Solutions</span>
            </span>{" "}
            Plans & Pricing
          </motion.div>
          <p className="text-paragraph md:text-lg">
            Explore our enticing array of "Plans & Pricing" designed just for
            you! Dive into a world of options tailored to suit your needs and
            budget.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-col-2  grid-cols-1 sm:mx-auto m-auto h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} //X:100
            whileInView={{ opacity: 1, scale: 1 }} //y:100
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="group"
          >
            <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-105">
              <div className="md:p-4 p-2 flex flex-col bg-gray-900 rounded md:h-[650px] md:justify-between">
                <div>
                  <div className="mb-4 text-center">
                    <div className="mb-4 text-xl font-medium tracking-wide text-white flex flex-col items-center">
                      <h1 className="bg-[#0EA5E9] rounded-lg w-[70%] p-1">
                        Basic Plan
                      </h1>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="mr-2 text-3xl font-semibold text-white lg:text-4xl">
                        &#8377; 24,999
                      </p>
                      <p className="text-lg text-gray-500">/ Project</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {starterPackBenefits.map((benefit) => {
                      return (
                        <li key={benefit?.id} className="flex items-center">
                          <div className="mr-3">
                            <svg
                              className="w-4 h-4 text-[#0444b1]"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeWidth="2"
                            >
                              <polyline
                                fill="none"
                                stroke="currentColor"
                                points="6,12 10,16 18,8"
                              />
                              <circle
                                cx="12"
                                cy="12"
                                fill="none"
                                r="11"
                                stroke="currentColor"
                              />
                            </svg>
                          </div>
                          <p className="font-medium text-gray-300">
                            {benefit?.benefit}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="inline-flex bottom-0 flex-col justify-center font-semibold items-center w-full h-12 px-6 hover:scale-105 tracking-wide text-white transition bg-[#e57e2c] duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
              <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
              <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} //X:100
            whileInView={{ opacity: 1, scale: 1 }} //y:100
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="group"
          >
            <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-105">
              <div className="md:p-4 p-2 flex flex-col bg-gray-900 rounded md:h-[650px] md:justify-between">
                <div>
                  <div className="mb-4 text-center">
                    <div className="mb-4 text-xl font-medium tracking-wide text-white flex flex-col items-center">
                      <h1 className="bg-[#10b981] rounded-lg w-[70%] p-1">
                        Advanced Plan
                      </h1>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="mr-2 text-3xl font-semibold text-white lg:text-4xl">
                        &#8377; 49,999
                      </p>
                      <p className="text-lg text-gray-500">/ Project</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {proPackBenefits.map((benefit) => {
                      return (
                        <li key={benefit?.id} className="flex items-center">
                          <div className="mr-3">
                            <svg
                              className="w-4 h-4 text-[#0444b1]"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeWidth="2"
                            >
                              <polyline
                                fill="none"
                                stroke="currentColor"
                                points="6,12 10,16 18,8"
                              />
                              <circle
                                cx="12"
                                cy="12"
                                fill="none"
                                r="11"
                                stroke="currentColor"
                              />
                            </svg>
                          </div>
                          <p className="font-medium text-gray-300">
                            {benefit?.benefit}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex flex-col justify-center items-center font-semibold hover:scale-105 w-full h-12 px-6  tracking-wide text-white bg-[#0444b1] transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
              <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
              <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} //X:100
            whileInView={{ opacity: 1, scale: 1 }} //y:100
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="group"
          >
            <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-105">
              <div className="md:p-4 p-2 flex flex-col bg-gray-900 rounded md:h-[650px] h-auto md:justify-between">
                <div>
                  <div className="mb-4 text-center">
                    <div className="mb-4 text-xl font-medium tracking-wide text-white flex flex-col items-center">
                      <h1 className="bg-[#ca8a04] rounded-lg w-[70%] p-1">
                        Enterprise Plan
                      </h1>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="mr-2 text-3xl font-semibold text-white lg:text-4xl">
                        &#8377; 74,999
                      </p>
                      <p className="text-lg text-gray-500">/ Project</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {businessPackBenefits.map((benefit) => {
                      return (
                        <li key={benefit?.id} className="flex items-center">
                          <div className="mr-3">
                            <svg
                              className="w-4 h-4 text-[#0444b1]"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeWidth="2"
                            >
                              <polyline
                                fill="none"
                                stroke="currentColor"
                                points="6,12 10,16 18,8"
                              />
                              <circle
                                cx="12"
                                cy="12"
                                fill="none"
                                r="11"
                                stroke="currentColor"
                              />
                            </svg>
                          </div>
                          <p className="font-medium text-gray-300">
                            {benefit?.benefit}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="inline-flex bottom-0 flex-col justify-center items-center font-semibold w-full h-12 px-6 hover:scale-105 tracking-wide text-white transition bg-[#e57e2c] duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
              <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
              <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
