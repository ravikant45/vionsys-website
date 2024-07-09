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
