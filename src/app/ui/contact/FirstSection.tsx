import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import first from "/public/assets/Contact/first.jpg";
export function TypewriterEffectDemo() {}
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
        <div className="w-full h-full relative flex bg-black">
          <Image src={first} alt="" className="w-full h-full  object-cover bg-no-repeat opacity-45"/>
          <div className="absolute top-0 left-0 right-20  w-full text-2xl h-full flex items-center">
            <TypewriterEffect words={words} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conts;
