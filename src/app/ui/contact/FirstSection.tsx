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
    <>
      <div className="pt-5">
        <div className="md:w-[100vw] md:h-[100vh] h-[50vh] relative flex bg-black">
          <Image
            src={first}
            alt="Contact Background Image"
            className="w-full h-full  object-cover bg-no-repeat opacity-45"
          />
          <div className="absolute top-0  w-full text-2xl h-full flex items-center px-4">
            <TypewriterEffect className="md:text-3xl text-2xl" words={words} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Conts;
