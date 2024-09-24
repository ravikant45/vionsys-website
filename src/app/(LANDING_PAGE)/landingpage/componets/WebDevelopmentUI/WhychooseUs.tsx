"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { MdTouchApp } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const WhychooseUs = () => {
  return (
    <main>
      <section className="">
        <div className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -100 }} //X:100
                whileInView={{ opacity: 1, y: 0 }} //y:100
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }} className="lg:text-center">
              <div
                className="text-MainHeading mb-2 font-bold "
              >
                Why choose us?
              </div>
              <p className="font-heading mt-2 text-SubHeading leading-8 font-bold tracking-tight">
                We know design, We know development. We are web design experts!
              </p>
              <p className="mt-4 max-w-3xl md:text-lg text-base text-gray-800 lg:mx-auto">
                Our team specializes in creating visually stunning, responsive
                websites that perfectly align with your vision. Combining
                innovative design with robust development, we ensure your online
                presence is not only attractive but also highly functional and
                user-friendly.
              </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -100 }} //X:100
                whileInView={{ opacity: 1, y: 0 }} //y:100
                transition={{
                  delay: 0.2,
                  scale: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut",
                }} className="md:mt-10 mt-3">
              <div className="md:gap-10 md:grid md:grid-cols-2 md:gap-x-8">
                <div className="relative md:mt-0 mt-3">
                  <div className="md:block hidden">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <FaCode size={50} color="#e57e2c" />
                    </div>
                  </div>
                  <p className="font-heading md:ml-16 text-lg leading-6 font-bold text-gray-700">
                  Expertise in Design and Development
                  </p>
                  <div className="mt-2 md:ml-16 text-paragraph">
                  With a deep understanding of design and development, we
                    seamlessly blend aesthetics and functionality to create
                    stunning websites.
                  </div>
                </div>
                <div className="relative md:mt-0 mt-3">
                  <div className="md:block hidden">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <HiOutlineDesktopComputer size={50} color="#e57e2c" />
                    </div>
                  </div>
                  <p className="font-heading md:ml-16 text-lg leading-6 font-bold text-gray-700">
                    Robust Development
                  </p>
                  <div className="mt-2 md:ml-16 text-paragraph">
                    Our websites aren't just pretty faces – they're built to be
                    reliable and robust, ensuring seamless performance.
                  </div>
                </div>
                <div className="relative md:mt-0 mt-3">
                  <div className="md:block hidden">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <MdTouchApp size={50} color="#e57e2c" />
                    </div>
                  </div>
                  <p className="font-heading md:ml-16 text-lg leading-6 font-bold text-gray-700">
                    User-Friendly Experience
                  </p>
                  <div className="mt-2 md:ml-16 text-paragraph">
                    We design websites with your users in mind, making
                    navigation a breeze for a delightful user experience.
                  </div>
                </div>
                <div className="relative md:mt-0 mt-3">
                  <div className="md:block hidden">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <FaCogs size={50} color="#e57e2c" />
                    </div>
                  </div>
                  <p className="font-heading md:ml-16 text-lg leading-6 font-bold text-gray-700">
                    Customized Approach
                  </p>
                  <div className="mt-2 md:ml-16 text-paragraph">
                    Your project is unique, and so is our approach. We tailor
                    our services to meet your specific needs.
                  </div>
                </div>
                <div className="relative md:mt-0 mt-3">
                  <div className="md:block hidden">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <MdVerified size={50} color="#e57e2c" />
                    </div>
                  </div>
                  <p className="font-heading md:ml-16 text-lg leading-6 font-bold text-gray-700">
                    Commitment to Quality
                  </p>
                  <div className="mt-2 md:ml-16 text-paragraph">
                    Quality is our priority, and we're committed to delivering
                    websites that exceed your expectations.
                  </div>
                </div>
                <div className="relative md:mt-0 mt-3">
                  <div className="md:block hidden">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <IoIosPeople size={50} color="#e57e2c" />
                    </div>
                  </div>
                  <p className="font-heading md:ml-16 text-lg leading-6 font-bold text-gray-700">
                    Professional Team
                  </p>
                  <div className="mt-2 md:ml-16 text-paragraph">
                    Our team consists of passionate professionals dedicated to
                    bringing your vision to life with creativity and expertise.
                  </div>
                </div>
                <div className="relative md:mt-0 mt-3">
                  <div className="md:block hidden">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <FaTasks size={40} color="#e57e2c" />
                    </div>
                  </div>
                  <p className="font-heading md:ml-16 text-lg leading-6 font-bold text-gray-700">
                    Comprehensive Services
                  </p>
                  <div className="mt-2 md:ml-16 text-paragraph">
                    From concept to launch, we offer a full range of web design
                    and development services, making us your one-stop solution.
                  </div>
                </div>
                <div className="relative md:mt-0 mt-3">
                  <div className="md:block hidden">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <MdSupportAgent size={50} color="#e57e2c" />
                    </div>
                  </div>
                  <p className="font-heading md:ml-16 text-lg leading-6 font-bold text-gray-700">
                    Continued Support
                  </p>
                  <div className="mt-2 md:ml-16 text-paragraph">
                    Our support doesn't end at launch – we're here to ensure
                    your website stays updated and performs at its best.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhychooseUs;
