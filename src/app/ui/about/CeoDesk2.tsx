"use client";

import React, { useEffect, useState } from "react";
import colon from "../../../../public/assets/About/Colon.svg";
import Image from "next/image";

interface CEODesk {
  Name: string;
  Position: string;
  Location: string;
  Img: string;
  Message: string;
}

const CEODesk: CEODesk[] = [
  {
    Name: "Govind Rathod",
    Position: "CEO of Vionsys IT Solutions India Pvt. Ltd.",
    Location: "Pune, India",
    Img: "/assets/About/Govind Rathod.jpg",
    Message:
      "Navigating the evolving tech landscape, Vionsys IT Solutions leverages IT to address global needs. Our goal is to foster sustainable growth through innovation, cutting-edge technology, and strong connections.",
  },
];

const CeoDesk2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % CEODesk.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full flex flex-col items-center py-14 bg-gradient-to-l from-[#215cbc] via-blue-100 to-gray-100">
      <div className="md:w-[70vw] w-[90vw] font-light tracking-wide">
        <h2 className="text-3xl font-bold text-[#215cbc]">
          From Leadership's Desk
        </h2>
        <div className="pt-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-grow mt-3 mb-7 w-28"></div>
      </div>
      <div className="md:w-[70vw] w-[90vw] overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {CEODesk.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex md:flex-row flex-col justify-center items-center font-light tracking-wide"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <div className="md:w-1/2 md:order-2 order-1 md:py-0 mt-7">
                <div className="text-left mx-auto">
                  <div className="mb-4 text-black items-start ">
                    <Image
                      src={colon}
                      alt="Colon Image"
                      height={120}
                      width={120}
                      className="py-4 rounded-sm object-contain"
                    />
                    <p className="text-base leading-6 ">"{item.Message}"</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:order-1 order-2 flex flex-col md:items-start items-center mt-6">
                <div className="flex items-start pb-6">
                  <Image
                    src={item.Img}
                    width={500}
                    height={500}
                    alt={item.Name}
                    className="w-52 h-52 border rounded-[50%] md:ml-6"
                  />
                </div>
                <div className="">
                  <div className="md:border-l-2 md:border-white md:h-20 md:pl-10 flex flex-col md:items-start items-center">
                    <p className="font-semibold text-xl">{item.Name}</p>
                    <p className="font-medium">{item.Position}</p>
                    <p className="font-medium">{item.Location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CeoDesk2;
