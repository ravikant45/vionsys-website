"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from '@/components/ui/button';
import { BsTelephoneOutboundFill } from "react-icons/bs";
import BgTypewriteImage from "/public/TypeWriter.jpg";
import Image from "next/image";

export function TypewriterDemo() {
  const words = [
    {
      text: "Intrested",

    },
    {
      text: "in",
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
    },
    {
      text: "us?",
    },
  ];
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center bg-cover justify-center md:h-[40rem] h-[20rem] w-[100vw] relative">
        <Image src={BgTypewriteImage} alt="" className="absolute w-full h-full opacity-45" />
        <div className="absolute top-0 flex flex-col gap-4 justify-center items-center w-full h-full">
          <TypewriterEffect words={words} />
          <div className="">
            <Button>Call Us <BsTelephoneOutboundFill className="inline-block ml-2 text-sm" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
