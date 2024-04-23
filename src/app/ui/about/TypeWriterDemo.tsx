"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from '@/components/ui/button';

export function TypewriterDemo() {
  const words = [
    {
      text: "Considering",
      className: "text-orange-500 dark:text-blue-500",
    },
    {
      text: "a",
    },
    {
      text: "Career",
    },
    {
      text: "with",
    },
    {
      text: "us?.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
      <Button>Call Us</Button>
      </div>
    </div>
  );
}
