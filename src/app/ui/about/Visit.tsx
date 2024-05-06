"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaLocationArrow } from "react-icons/fa6";

const Visit = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="w-[100vw] z-0 overflow-x-hidden py-2 dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="h-auto w-screen bg-transparent flex lg:flex-row lg:justify-center flex-col justify-center items-center">
        <div data-aos="zoom-in" className="h-auto flex flex-col justify-center lg:items-center items-center gap-4">
          <div className="flex md:gap-10 md:flex-row flex-col">
            <div className="p-2 flex flex-col items-center justify-center">
              <h1 className="md:text-3xl text-sm font-extrabold">
                Visit Our Office in <span className="text-orange">Pune, India</span>
              </h1>
              <h1 className="md:text-2xl text-xs py-2 text-blue2 font-bold flex items-center justify-center">
                Vionsys It Solutions India Pvt.Ltd{" "}
              </h1>
              <p className="text-gray1 lg:text-center text-center text-xs md:text-xl">
                IT PARK, 6th floor office no.{" "}
                <span className="block">504 Stellar Spaces, opposite</span> Zensar,
                Pune, Maharashtra 411014
              </p>
              <div className="flex justify-center items-center py-2">
                <Button onClick={toggleMap}>
                  View On Map <FaLocationArrow className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="p-2">
              {showMap && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5506.154298477709!2d73.94060501579851!3d18.546950671317315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf282419d50d%3A0x2cc71f615579ab3a!2sVionsys%20IT%20Solutions%20India%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1714046923749!5m2!1sen!2sin"
                  width="500"
                  height="350"
                  className="pb-5 h-auto lg:h-[500px] w-auto lg:w-[600px]"
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
