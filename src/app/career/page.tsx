import React from "react";
import CareerComponent from "../ui/Careers/careers";
import Life from "../ui/Careers/life";
import Training from "../ui/Careers/training";
import Jobs from "../ui/Careers/jobs";
const page = () => {
  return (
    <div>
      <CareerComponent />
      <Life />
      <Training />
      <Jobs />
    </div>
  );
};

export default page;
