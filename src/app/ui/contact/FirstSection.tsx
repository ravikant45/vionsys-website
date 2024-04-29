import React from "react";
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
          <img
            className="w-full h-full  object-cover bg-no-repeat opacity-55 "
            src="https://img.freepik.com/free-photo/interior-workspace-inspired-by-technology-innovation_1409-7691.jpg?t=st=1714123232~exp=1714126832~hmac=15c4e82539d76b79b7f97f84ed72d5634cbdfbd566e8b3b31b08243316ba1b07&w=1060"
            alt=""
          />
          <div className="absolute top-0 left-0 right-20  w-full text-2xl h-full flex items-center">
            <TypewriterEffect words={words} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conts;
