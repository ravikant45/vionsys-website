"use client";
import React from "react";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div className="h-screen w-screen relative">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="/assets/About/AboutBg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="h-screen absolute z-1 w-full flex flex-col justify-center py-4 lg:items-start">
            {/* Text Content with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mt-5 px-8 sm:mt-10 sm:px-20"
            >
              <h1 className="text-white text-3xl md:text-7xl">
                Ready To <br className="sm:hidden" />
                <span className="block">Transform Your Ideas </span>
                Into Reality?
              </h1>
            </motion.div>

            {/* Contact Us Button */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
              <Link href="/contact" passHref>
                <Button>
                  Call Us{" "}
                  <BsTelephoneOutboundFill className="inline-block ml-2 text-sm" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
