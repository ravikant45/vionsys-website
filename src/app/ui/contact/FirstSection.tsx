import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import first from "/public/assets/Contact/first.jpg";
export function TypewriterEffectDemo() { }
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
    text: "Redefining ",
    className: "text-white ",
  },
  {
    text: "IT",
    className: "text-white",
  },
  {
    text: "Solutions",
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
    <div>
      <div className="">
        <div className="md:w-[100vw] md:h-[100vh] relative flex bg-black">
          <Image src={first} alt="" className="w-full h-full  object-cover bg-no-repeat opacity-45" />
          <div className="absolute top-0  w-full text-2xl h-full flex items-center px-4">
            <TypewriterEffect words={words} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conts;
