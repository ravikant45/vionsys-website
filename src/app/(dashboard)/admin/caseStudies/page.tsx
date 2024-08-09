"use client";
import AllCaseStudies from "@/app/ui/dashboard/caseStudies/AllCaseStudies";
import withAuthHOC from "@/HOC/withAuthHOC";

import React from "react";

const page = () => {
  return <AllCaseStudies />;
};

export default withAuthHOC(page, "admin");
