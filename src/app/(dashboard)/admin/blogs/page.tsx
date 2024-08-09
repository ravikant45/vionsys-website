"use client";
import React from "react";

import dynamic from "next/dynamic";
import withAuthHOC, { WithAuthProps } from "@/HOC/withAuthHOC";

// Dynamically import the AllBlogs component to avoid SSR issues
const AllBlogs = dynamic(() => import("@/app/ui/dashboard/blogs/AllBlogs"), {
  ssr: false,
});

const Page: React.FC<WithAuthProps> = ({ role }) => {
  return <AllBlogs role={role} />;
};

export default withAuthHOC(Page, "admin");
