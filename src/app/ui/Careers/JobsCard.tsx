import React from "react";

import { Jobs } from "./JobsData";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function JobsCard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-2">
        <h1
          data-aos="fade-left"
          className="text-MainHeading font-extrabold md:text-start text-center pb-3"
        >
          Your Future Begins Here
        </h1>
        <h2 data-aos="fade-right" className="font-bold text-SubHeading">
          Current Openings
        </h2>
      </div>
      <div className="w-full px-4">
        <HoverEffect items={Jobs} />
      </div>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem]  rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
