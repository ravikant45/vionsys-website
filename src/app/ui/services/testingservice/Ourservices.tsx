"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineViewCompactAlt } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { LuFunctionSquare } from "react-icons/lu";
import { TbTestPipe } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import Quality from "/public/assets/services/Testing/Quality.jpeg";

const Ourservices = () => {
  const services = [
    {
      id: 1,
      title: "Web Automation Testing",
      description:
        "Transform your software testing with our Web Automation Testing service, streamlining processes for enhanced efficiency. By automating tests, we ensure swift, accurate results, empowering seamless software performance.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20 ">
          <TbAutomaticGearbox size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Compatibility Testing for Web Applications",
      description:
        "Ensuring that web applications function seamlessly across different web browsers, devices and screen resolutions to provide a consistent user experience.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20 ">
          <MdOutlineViewCompactAlt size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Usability Testing",
      description:
        "Assessing the user interface and experience of web applications to ensure intuitive navigation, efficient workflow and overall user satisfaction.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <MdOutlineVerifiedUser size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 4,
      title: "Performance Testing",
      description:
        "Evaluating the speed, responsiveness and scalability of web applications under various load conditions to ensure optimal performance.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20 ">
          <CgPerformance size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 5,
      title: "Functional Testing",
      description:
        "Systematically verifying each feature of the web application to ensure it operates as intended according to specifications.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <LuFunctionSquare size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 6,
      title: "Regression Testing",
      description:
        "Detecting and preventing the introduction of defects or errors in web applications due to recent code changes or updates.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <TbTestPipe size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 7,
      title: "Mobile Testing",
      description:
        "Mobile testing involves verifying individual components of the application's code to ensure they function correctly on various devices. Automated tests identify and fix bugs early in development, ensuring a smooth user experience.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <FaUnity size={35} className="text-orange" />
        </div>
      ),
    },
    {
      id: 8,
      title: "Security Testing",
      description:
        "Identifying and addressing potential security vulnerabilities in web applications to safeguard against cyber threats and protect sensitive data.",
      icon: (
        <div className="p-4 bg-gray2 rounded-full relative z-20">
          <MdOutlineSecurity size={35} className="text-orange" />
        </div>
      ),
    },
  ];
  return (
    <div>
      <section className="w-[100vw] dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full flex flex-col justify-center items-center gap-4 md:px-4 px-2 md:py-6 py-2">
          <h3 className="text-orange font-bold md:text-3xl text-xl relative z-20">
            Our Software Testing Services
          </h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 text-xl">
            {services.map((service) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }}
                key={service.id}
                className="flex flex-col py-4 items-center gap-2 bg-white border border-gray-200 rounded-lg shadow-md transition-transform hover:scale-110 hover:z-10 hover:shadow-xl"
                style={{ margin: "10px" }}
              >
                {service.icon}
                <h4 className="text-blue3 text-center font-bold items-center relative z-20 bg-clip-text">
                  {service.title}
                </h4>
                <p className="text-center text-base relative z-20 bg-clip-text">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="bg-black relative">
          <Image
            src={Quality}
            alt=""
            className="md:w-[100vw] md:h-[100vh] h-[60vh] sm:[50vh] opacity-75"
            quality={100}
          />
          <div className="bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-start w-full px-4">
            <div className="md:w-[50%] w-full flex flex-col gap-2 p-2">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="md:text-5xl text-2xl py-4 text-white font-bold"
              >
                Below are the testing implementation steps
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 20 },
                  opacity: { duration: 0.4 },
                  ease: "easeInOut",
                }}
                className="md:text-lg text-sm font-medium"
              >
                We implement testing follows a structured process starting with
                requirement understanding. Test cases are executed in a prepared
                environment, defects are reported and resolved through retesting
                and regression testing ensures stability. This culminates in
                comprehensive test closure and post-implementation support for
                seamless software deployment.
              </motion.p>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Ourservices;
