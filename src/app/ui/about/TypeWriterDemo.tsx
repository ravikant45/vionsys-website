"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from '@/components/ui/button';
import { BsTelephoneOutboundFill } from "react-icons/bs";
import Link from "next/link";

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
    <div className="bg-dot-slate-300 flex justify-center items-center">
      <div className="flex flex-col items-center bg-cover justify-center w-[100vw] relative">
        <div className="py-10 flex flex-col gap-4 justify-center items-center px-3 w-1/2  h-full">
          <TypewriterEffect words={words} />
          <div className="">
            <Link href='/contact'><Button>Contact<BsTelephoneOutboundFill className="inline-block ml-2 text-sm" /></Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
