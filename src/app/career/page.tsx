import React from "react";
import CareerComponent from "../ui/Careers/careers";
import Life from "../ui/Careers/life";
import Training from "../ui/Careers/training";
import JobsCard from "../ui/Careers/JobsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <CareerComponent />
      <Life />
      <Training />
      <JobsCard />
    </div>
  );
};

export default page;
