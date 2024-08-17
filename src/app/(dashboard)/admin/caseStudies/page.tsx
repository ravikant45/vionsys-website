"use client";

import dynamic from "next/dynamic";
import withAuthHOC from "@/HOC/withAuthHOC";
import React from "react";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamically import the AllCaseStudies component
const AllCaseStudies = dynamic(
  () => import("@/app/ui/dashboard/caseStudies/AllCaseStudies"),
  {
    loading: () => <DynamicLoader />,
  }
);

const Page = () => {
  return <AllCaseStudies />;
};

export default withAuthHOC(Page, "admin");
