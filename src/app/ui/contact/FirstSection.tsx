import React from "react";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

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
    className: "text-blue-700 ",
  },
  {
    text: "IT",
    className: "text-blue-700",
  },
  {
    text: "Solutions",
    className: "text-blue-700 ",
  },
  {
    text: ".",
    className: "text-blue-700 dark:text-blue-500",
  },
  {
    text: ".",
    className: "text-blue-700 dark:text-blue-500",
  },
  {
    text: ".",
    className: "text-blue-700 dark:text-blue-500",
  },
];

const Conts = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] pb-0">
        <div className="w-full h-full relative flex">
          <img
            className="w-full h-full  object-cover bg-no-repeat"
            src="https://img.freepik.com/free-photo/easy-wireless-yechnology-payment_23-2149105216.jpg?t=st=1713522166~exp=1713525766~hmac=55a980a4e5020914f9d131f46c393d47c65dc10e07cccaad1ac0249612117b8f&w=900"
            alt=""
          />
          <div className="absolute top-0 left-0 right-20  w-full h-full flex items-center">
            <TypewriterEffect words={words} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conts;
