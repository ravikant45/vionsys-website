import React from "react";

import { Metadata } from "next";
import dynamic from "next/dynamic";

const CareerComponent = dynamic(() => import("../../ui/Careers/careers"), {
  loading: () => <p>Loading...</p>,
});
const JobsCard = dynamic(() => import("../../ui/Careers/JobsCard"), {
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: "Career",
  description:"Join Vionsys IT Solutions Pvt Ltd and advance your career in a dynamic technology environment. Explore new chances, improve your skills, and participate to creative IT projects. Apply now to join a forward-thinking, growth-oriented team.",
  openGraph:{
    images:"/opangraph.png",
    description:"Discover rewarding career opportunities with Vionsys IT Solutions Pvt Ltd. We provide a stimulating work environment, professional development opportunities, and the possibility to work on cutting-edge IT solutions. Begin your career with us and make a significant influence in the IT business."
  }
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <CareerComponent />
      <JobsCard />
    </div>
  );
};

export default page;
