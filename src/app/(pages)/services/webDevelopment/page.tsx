"use client";
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";
import React, { useEffect } from "react";
import "./page1.css";
import Image from "next/image";
import Link from "next/link";
import FaqSec from "./faqSec";
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

  return (
    <main className="pt-16 overflow-x-hidden">
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
            <h1 className="relative z-10 md:text-3xl text-xl mx-auto max-w-xl uppercase shadow-md shadow-gray-200 text-gray-800 font-extrabold bg-gradient-to-r from-yellow-500 to-orange p-1 rounded-lg tracking-wider leading-9 text-center">
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
          Unlock your business's potential with our expert software development
          services, crafting tailored solutions to fit your needs and keeping
          you ahead in today's digital landscape.
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
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4" key={ser.title}>
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

      {/* types of of that services */}
      <section className=" pt-10">
        <div className=" flex flex-col justify-center items-center md:py-3 ">
          <h1 className="font-bold text-3xl mb-5">
            why
            <span className="text-orange mx-1 font-extrabold text-4xl relative inline-block stroke-current">
              Choose
              <svg className="absolute -bottom-0.5 text-blue1 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
              </svg>
            </span>
            us
          </h1>
          <p className="text-lg text-gray-500 p-2 font-semibold text-SubHeading lg:text-xl text-center max-w-[50rem] dark:text-gray-400">
            At Vionsys IT Solutions India Pvt. Ltd., we understand that choosing
            a development partner is a critical decision for your business.
            Here's why we believe we are the right choice for your development
            needs.
          </p>
        </div>
        <div className="flex flex-wrap  justify-center items-center md:gap-5 p-2 cursor-pointer">
          {data.workType.map((work: any) => {
            return (
              <div
                key={work.id}
                className="w-[20rem] md:h-[18rem] h-full p-2 flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              >
                <div className=" relative rounded-t-xl overflow-hidden">
                  <Image
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                    width={500}
                    height={500}
                    src={work?.img}
                    alt={work?.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center text-center text-white md:p-4 p-2">
                    <h3 className="text-lg font-semibold mb-2">
                      {work?.title}
                    </h3>
                    <p className="text-sm">{work?.description}</p>
                  </div>
                </div>
                <div className="md:p-4 p-2">
                  <h3 className="text-center text-black font-semibold dark:text-white ">
                    {work?.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* contact us small section */}
      <section id="Vsec4" className="p-3">
        <div className="relative items-center w-full px-5 py-2 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-gray-700 md:text-5xl lg:text-4xl lg:max-w-7xl">
                  Experience the Best
                  <br className="hidden lg:block" />
                  Web Development Environment
                </h1>
                <p className="max-w-xl mx-auto leading-relaxed text-paragraph p-2">
                  We believe in delivering the best Website to our customers and
                  providing nothing short of excellence.
                </p>
                <div className="flex md:flex-row flex-col justify-center items-center w-full max-w-2xl gap-2 mx-auto">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <Link
                      href={"/contact"}
                      className="px-5 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <Link
                      href={"/about"}
                      className="items-center px-5 py-2  text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <div>
        <FaqSec />
      </div>
      {/*  */}
    </main>
  );
};

export default Page;
