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
  title: "Best Business Intelligence & Analytical Services in Kharadi",
  description:
    "The primary goal for Business Intelligence is to implement and program with our experts for market forecasting, trend analysis, and operations optimization.",
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
