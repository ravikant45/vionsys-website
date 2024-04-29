import React from "react";
import CareerComponent from "../ui/Careers/careers";
import Life from "../ui/Careers/life";
import Training from "../ui/Careers/training";
import JobsCard from "../ui/Careers/JobsCard";
const page = () => {
  return (
    <div>
      <CareerComponent />
      <Life />
      <Training />
      <JobsCard />
    </div>
  );
};

export default page;
