import React from "react";

import { Metadata } from "next";
import dynamic from "next/dynamic";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

const CareerComponent = dynamic(() => import("../../ui/Careers/careers"), {
  loading: () => <DynamicLoader />,
});
const JobsCard = dynamic(() => import("../../ui/Careers/JobsCard"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Career - Kharadi's Best IT Development Services Company",
  description:
    "Learn & Discover the best Career opportunities with Vionsys IT Solution India Pvt. Lt. Send an application now to join & find the best fit for your career goals.",
  alternates: {
    canonical: `${BaseUrl}/career`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Discover rewarding career opportunities with Vionsys IT Solutions Pvt Ltd. We provide a stimulating work environment, professional development opportunities, and the possibility to work on cutting-edge IT solutions. Begin your career with us and make a significant influence in the IT business.",
  },
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
