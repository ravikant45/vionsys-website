"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Land1 from "../landingpage/Land1.jpeg";
import Land2 from "../landingpage/Land2.jpeg";
import Land3 from "../landingpage/Land3.jpeg";
import Land4 from "../landingpage/Land5.jpg";
import Land5 from "../landingpage/Land6.jpg";
import { TypewriterEffect1 } from "@/components/ui/typewriter-effect1";
import React from "react";
import LogoImage from "/public/assets/logo.png";

const HeroSection = () => {
  const gridStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px), 
                      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
    backgroundSize: "140px 160px", // Adjust the grid size here
  };

  const words = [
    {
      text: "Web",
      className: "text-black",
    },
    {
      text: "Design",
      className: "text-black",
    },
    {
      text: "&",
      className: "text-orange",
    },
    {
      text: "Web",
      className: "text-orange",
    },
    {
      text: "Development",
      className: "text-orange",
    },
    {
      text: "Company",
      className: "text-black",
    },
  ];

  return (
    <main>
      <div className=" w-full md:min-w-full md:p-10">
        <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
          <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
          <div className="relative  bg-white shadow-lg sm:rounded-3xl ">
            <div className=" px-4 md:px-20 py-6">
              {/* navbar  */}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="flex md:items-center justify-center text-3xl font-bold text-true-gray-800">
                    <div className="px-4 py-2">
                      <Link href="/">
                        <Image src={LogoImage} alt="" className="w-[152px]" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <Link
                    href={"/contact"}
                    className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href={"/about"}
                    className="px-6 py-3 rounded-3xl font-medium text-orange outline-none focus:outline-none shadow-md from-true-gray-900 transition duration-200 ease-in-out"
                  >
                    About Us
                  </Link>
                </div>
              </div>
              {/* <!-- /nav -->

          <!-- hero section --> */}

              <div className="flex md:h-[100vh] h-[60vh] md:mt-16" style={gridStyle}>
                <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
                  <div className="flex flex-col justify-center md:pr-8 xl:pr-0 md::max-w-xl">
                    <div className="md:max-w-xl mb-6">
                      <h2 className="mb-6 md:text-3xl font-bold tracking-tight text-gray-900 text-2xl sm:leading-none h-auto md:h-24 h-30">
                        <TypewriterEffect1 words={words} />
                      </h2>
                      <motion.div
                      initial={{ opacity: 0, x: -100 }} //X:100
                      whileInView={{ opacity: 1, x: 0 }} //y:100
                      transition={{
                        delay: 0.2,
                        scale: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: "easeInOut",
                      }} className="text-base text-gray-800 md:text-xl">
                        Your one-stop destination for top-notch web design &
                        development services.
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }} //X:100
                      whileInView={{ opacity: 1, x: 0 }} //y:100
                      transition={{
                        delay: 0.2,
                        scale: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: "easeInOut",
                      }}
                      className="inline-flex mb-6 items-center italic font-semibold transition-colors duration-200 text-purple-600 hover:text-purple-900 text-lg"
                    >
                      You Think, We Make It!
                    </motion.div>
                    <div>
                      <Link
                        href={"/"}
                        className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center md:my-6 items-center font-extrabold"
                      >
                        <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                        <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                        <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                        <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                        <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                        <p className="z-10">Discover More</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:block hidden">
                  <div className=" flex justify-center items-center">
                    <div className="flex gap-8 md:h-[80vh] h-[60vh]">
                      <div className="flex flex-col justify-center items-center">
                        <div>
                          <Image
                            src={Land1}
                            alt=""
                            width="150"
                            height="220"
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-end items-center gap-10">
                        <div>
                          <Image
                            src={Land2}
                            alt=""
                            width="150"
                            height="220"
                            className="rounded-xl"
                          />
                        </div>
                        <div>
                          <Image
                            src={Land3}
                            alt=""
                            width="150"
                            height="220"
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-center gap-8">
                        <div>
                          <Image
                            src={Land4}
                            alt=""
                            width="150"
                            height="220"
                            className="rounded-xl"
                          />
                        </div>
                        <div>
                          <Image
                            src={Land5}
                            alt=""
                            width="150"
                            height="220"
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
