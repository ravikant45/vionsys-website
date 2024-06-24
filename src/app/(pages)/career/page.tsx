import React from "react";

import { Metadata } from "next";
import dynamic from "next/dynamic";

const CareerComponent = dynamic(() => import("../../ui/Careers/careers"), {
  loading: () => <p>Loading...</p>,
});
const Life = dynamic(() => import("../../ui/Careers/life"), {
  loading: () => <p>Loading...</p>,
});
const Training = dynamic(() => import("../../ui/Careers/training"), {
  loading: () => <p>Loading...</p>,
});
const JobsCard = dynamic(() => import("../../ui/Careers/JobsCard"), {
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: "Career",
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <CareerComponent />
      <Life />
      <Training />
      <JobsCard />
    </div>
  );
};

export default page;
