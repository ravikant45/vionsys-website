"use client";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <main>
      <section className="heading pt-6">
        <motion.div
                      initial={{ opacity: 0, y: 100 }} //X:100
                      whileInView={{ opacity: 1, y: 0 }} //y:100
                      transition={{
                        delay: 0.2,
                        scale: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: "easeInOut",
                      }} className="w-full text-center mx-auto mb-4 font-bold leading-tight text-MainHeading">
          Our Services
        </motion.div>
        <p className="md:w-[70%] w-full mx-auto px-4 text-lg text-gray-800 text-paragraph text-center">
          We provide top-notch web design and development services tailored to
          your unique needs. Our customized and affordable web design solutions
          ensure your website stands out. With us, you can select the best plans
          to create a responsive web design that perfectly aligns with your
          vision.
        </p>
      </section>
      <section>
        <motion.div
                      initial={{ opacity: 0, scale: 0.7 }} //X:100
                      whileInView={{ opacity: 1, scale: 1 }} //y:100
                      transition={{
                        delay: 0.2,
                        scale: { type: "spring", stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: "easeInOut",
                      }} className="container relative flex flex-col justify-between h-full max-w-6xl px-4 mx-auto xl:px-0 pt-5">
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div className="relative h-full md:p-5 p-1 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Premium Website Quality
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      We specialize in creating premium-quality websites with
                      responsive web design that seamlessly aligns with your
                      vision. Our expert team ensures every detail reflects your
                      brand, providing a user-friendly experience across all
                      devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div className="relative h-full md:p-5 p-1 bg-white border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        24/7 Service Support
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Our clients are our top priority, and we are dedicated to
                      providing the best web design services along with 24/7
                      support. We stay active across all communication channels
                      to ensure comprehensive customer assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div className="relative h-full md:p-5 p-1 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Website Maintenance
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      We provide a tailored solution to ensure your online
                      presence stays polished and functional. Our dedicated team
                      works tirelessly behind the scenes, safeguarding your site
                      against glitches and optimizing its performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                  <div className="relative h-full md:p-5 p-1 bg-white border-2 border-yellow-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Responsive Web Design
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Experience the innovation of our responsive web design
                      services, tailored to adapt seamlessly across all devices.
                      With our cutting-edge approach, your website will
                      captivate users whether they're browsing on a desktop,
                      tablet, or smartphone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                  <div className="relative h-full md:p-5 p-1 bg-white border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Fast Delivery & Total Transparency
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Get ready to experience the thrill of lightning-fast
                      delivery paired with unparalleled transparency in our
                      cutting-edge web design services! At our core, we
                      prioritize efficiency and honesty, ensuring your project
                      progresses seamlessly while keeping you fully informed
                      every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div className="relative h-full md:p-5 p-1 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Graphic Design & Logo Design
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Explore our vibrant array of graphic design and logo
                      creation services that ignite your brand's visual
                      identity. Let your brand speak volumes through our
                      expertly crafted designs, where every pixel tells a story
                      of innovation and excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div className="relative h-full md:p-5 p-1 bg-white border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Web Hosting and Domain Services
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      We offer comprehensive web hosting and domain services to
                      ensure your online presence is seamless and robust. Our
                      web hosting solutions are designed to meet the diverse
                      needs of businesses, from startups to large enterprises,
                      providing reliable, secure, and high-performance hosting
                      environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;
