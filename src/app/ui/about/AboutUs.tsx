"use client"
import React from "react";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div
          className="h-screen w-screen bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/business-meeting_53876-91042.jpg')",
          }}
        >
          <div className="h-screen w-full flex flex-col justify-start absolute top-0 left-0 items-start">
            {/* Image Icon */}
            <img
              src="https://png.pngtree.com/png-vector/20221122/ourmid/pngtree-thinking-man-illustration-with-question-mark-and-light-bulb-for-business-png-image_6475461.png"
              className="h-32 w-32 mt-20 ml-5 sm:h-48 sm:w-48"
              alt=""
            />

            {/* Text Content with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mt-5 px-8 sm:mt-10 sm:px-20"
            >
              <h1 className="text-zinc-600 text-3xl sm:text-5xl">
                Ready To <br className="sm:hidden" />
                <span className="block">Transform Your Ideas </span>
                Into Reality?
              </h1>
            </motion.div>

            {/* Contact Us Button */}
            <button
              className="bg-transparent hover:bg-blue-700 hover:text-white absolute left-56 top-[450px]   text-blue-700 border-blue-700 border-2 font-bold py-2 px-4 rounded-full shadow-md mt-5 sm:mt-10 transition duration-300 ease-in-out"
            >
              <BsTelephoneOutboundFill className="inline-block mr-2" />
              Contact Us
            </button>

            {/* Para Container */}
            <div className="p-4 sm:p-6 rounded-3xl bg-blue-500 hover:bg-blue-700 cursor-pointer absolute bottom-10 left-0 right-0 mx-auto max-w-[500px] text-center shadow-gray-500 shadow-xl overflow-hidden">
              <p className="text-sm sm:text-base text-white leading-relaxed">
                At Vionsys It Solutions, we're dedicated{" "}
                <br className="sm:hidden" /> to providing specialized expertise
                and dependable <br className="sm:hidden" />
                support for projects of all types. Select the{" "}
                <br className="sm:hidden" /> engagement model that fits your
                project best and <br className="sm:hidden" /> set out on a
                journey toward digital excellence <br className="sm:hidden" />{" "}
                alongside our trusted team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
