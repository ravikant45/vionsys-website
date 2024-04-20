"use client";
import React from "react";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

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
          <div className="h-screen border-2 w-full flex flex-col justify-start py-4 lg:items-start">
            {/* Image Icon */}
            <img
              src="https://png.pngtree.com/png-vector/20221122/ourmid/pngtree-thinking-man-illustration-with-question-mark-and-light-bulb-for-business-png-image_6475461.png"
              className="h-32 w-32 mt-10 sm:h-48 sm:w-48"
              alt=""
            />

            {/* Text Content with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mt-5 px-8 sm:mt-10 sm:px-20"
            >
              <h1 className="text-zinc-600 text-3xl md:text-7xl">
                Ready To <br className="sm:hidden" />
                <span className="block">Transform Your Ideas </span>
                Into Reality?
              </h1>
            </motion.div>

            {/* Contact Us Button */}
            <div className="h-12 flex justify-center md:absolute md:left-80 md:top-[530px] items-center bg-white text-blue-700 hover:bg-blue-700 hover:text-white border-2 border-blue-700 rounded-full shadow-xl sm:p-3">
              <Link href="/contact" passHref>
                <button className="font-bold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <BsTelephoneOutboundFill className="inline-block mr-2 text-xl" />
                  Get In Touch
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
