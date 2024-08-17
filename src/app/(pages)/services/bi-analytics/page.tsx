import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Firstsection = dynamic(
  () => import("@/app/ui/services/biAnalytics/Firstsection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Secondsection = dynamic(
  () => import("@/app/ui/services/biAnalytics/Secondsection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const ScheduleMeetAndContactCTA = dynamic(
  () => import("@/utils/ScheduleMeetAndContactCTA"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Business Intelligence & Analytics Service",
  description:
    "Vionsys IT Solutions India Pvt Ltd's Business Intelligence and Analytics services will help you realize the full potential of data. We offer comprehensive solutions to help businesses make data-driven decisions, streamline processes, and improve business performance. Our skilled team uses cutting-edge technology to provide actionable insights that promote growth. Discover how our BI and Analytics services can help your business today. ",
  alternates: {
    canonical: `${BaseUrl}/services/bi-analytics`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides superior Business Intelligence and Analytics services to help you maximize the value of your data. Our bespoke solutions include in-depth analysis, real-time reporting, and predictive insights, allowing you to make educated decisions and stay ahead of the competition. Partner with us for tailored BI and Analytics to improve your business intelligence skills.  ",
  },
};

const BiAndAnalyticsDatapage = () => {
  return (
    <main className="pt-16">
      <Firstsection />
      <Secondsection />
      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
    </main>
  );
};

export default BiAndAnalyticsDatapage;
