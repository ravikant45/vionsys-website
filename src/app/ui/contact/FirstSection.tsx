import React from "react";
import Image from "next/image";
import first from "/public/assets/Contact/wtc6.jpg";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Think",
    className: "text-white ",
  },
  {
    text: "Beyond",
    className: "text-white",
  },
  {
    text: "With",
    className: "text-white",
  },
  {
    text: "Vionsys",
    className: "text-white",
  },
  {
    text: ".",
    className: "text-white",
  },
  {
    text: ".",
    className: "text-white",
  },
  {
    text: ".",
    className: "text-white",
  },
];

const Conts = () => {
  return (
    <div className="pt-5">
      <div className="md:w-[100vw] md:h-[100vh] h-[40vh] relative flex bg-black">
        {/* Background Image */}
        <Image
          src={first}
          alt="Contact Background Image"
          quality={100}
          className="w-full h-full object-fit object-bottom bg-no-repeat opacity-80"
        />

        {/* Hero Content */}
        <div className="absolute top-0  w-full text-2xl h-full flex justify-center items-center px-4">
          <TypewriterEffect className="md:text-3xl text-2xl" words={words} />
        </div>
      </div>
    </div>
  );
};

export default Conts;
