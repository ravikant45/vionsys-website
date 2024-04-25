"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from '@/components/ui/button';
import { BsTelephoneOutboundFill } from "react-icons/bs";

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
    <div className="flex flex-col items-center bg-cover justify-center h-[40rem] " 
        style={{
        backgroundImage:
          "url('/TypeWriter.jpg')",
      }}>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
      <Button>Call Us <BsTelephoneOutboundFill className="inline-block ml-2 text-sm" /></Button>
      </div>
    </div>
  );
}
