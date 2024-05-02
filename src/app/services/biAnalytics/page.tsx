import ServicesTemplateThree from "@/app/ui/services/ServicesTemplateThree";
import React from "react";
import { BiAndAnalyticsData } from "@/app/ui/services/data/BiAndAnalytics";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "BI And Analytics Services",
};
const page = () => {
  return (
    <main className="pt-16">
      <ServicesTemplateThree data={BiAndAnalyticsData} />
    </main>
  );
};

export default page;
