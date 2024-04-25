import React from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

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
          <div className="w-full h-full relative flex">
            <img
              className="w-full h-full  object-cover bg-no-repeat animate-"
              src="https://img.freepik.com/free-photo/blue-color-cinematic-style-modern-open-plan-office_1409-7481.jpg?t=st=1714036019~exp=1714039619~hmac=e6a190d3ccbbf69319653861f94c5767554953927ce3f030c337e0b74da77165&w=1060"
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
