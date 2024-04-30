"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from '@/components/ui/button';
import { BsTelephoneOutboundFill } from "react-icons/bs";
import BgTypewriteImage from "/public/TypeWriter.jpg";
import Image from "next/image";

export function TypewriterDemo() {
  const words = [
    {
      text: "Interested",
      className: "text-black",

    },
    {
      text: "in",
      className: "text-black",
    },
    {
      text: "Career",
      className: "text-orange",
    },
    {
      text: "opportunities",
      className: "text-orange",
    },
    {
      text: "with",
      className: "text-black",
    },
    {
      text: "us?",
      className: "text-black",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col items-center bg-cover justify-center md:h-[40rem] h-[20rem] w-[100vw] relative">
        <Image src={BgTypewriteImage} alt="" className="absolute w-full h-full" />
        <div className="absolute top-0 flex flex-col gap-4 justify-center items-center px-3 w-1/2  h-full">
          <TypewriterEffect words={words} />
          <div className="">
            <Button>Contact<BsTelephoneOutboundFill className="inline-block ml-2 text-sm" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
