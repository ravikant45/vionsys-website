'use client';

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
    Img: "/assets/About/Govind Rathod.jpeg",
    Message: "Navigating the evolving tech landscape, Vionsys IT Solutions leverages IT to address global needs. Our goal is to foster sustainable growth through innovation, cutting-edge technology, and strong connections."
  },
  {
    Name: "Nilam Rathod",
    Position: "CTO of Vionsys IT Solutions India Pvt. Ltd.",
    Location: "Pune, India",
    Img: "/assets/About/NilamRathod.jpeg",
    Message: "At Vionsys IT Solutions, we harness technology to drive innovation and solve challenges. Our commitment is to deliver robust, scalable solutions that meet evolving business needs with excellence and efficiency."
  },
]

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

  const gradientStyle = {
    // background: 'rgb(63, 94, 251)', // Fallback for older browsers
    background: 'radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(229, 126, 44, 1) 100%)',
    height: '60vh', // Full viewport height
    width: '100%' // Full width
  };

  return (
    <div className="w-full flex flex-col items-center py-14 bg-gradient-to-l from-[#215cbc] via-blue-100 to-gray-100">
      <div className="w-[70vw]  font-light tracking-wide">
        <h2 className="text-3xl font-bold text-[#215cbc]">From Leadership's Desk</h2>
        <div className="pt-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-grow mt-3 mb-7 w-28"></div>
      </div>
      <div className="w-[70vw] overflow-hidden relative">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {CEODesk.map((item, index) => (
            <div key={index} className="min-w-full flex flex-row justify-center items-start font-light tracking-wide" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <div className="w-1/2">
                <div className="text-left mx-auto">
                  <div className="mb-4 text-black flex flex-col items-start pr-10">
                    <Image src={colon} alt='' height={100} width={100} className="py-4 rounded-sm" />
                    <p className="text-base leading-6">"{item.Message}"</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col items-start">
                <div className="flex items-start pb-6">
                  <Image
                    src={item.Img}
                    width={500}
                    height={500}
                    alt={item.Name}
                    className="w-48 h-48 border rounded-full"
                  />
                </div>
                <div>
                  <div className="border-l-2 border-white h-20 pl-10">
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
      <div className="flex mt-6">
        {CEODesk.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 mx-2 rounded-full ${currentSlide === index ? 'bg-orange border border-black' : 'bg-white border border-black'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CeoDesk2;
