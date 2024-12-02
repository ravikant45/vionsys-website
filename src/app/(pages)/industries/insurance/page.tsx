import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const InsuranceHeroSection = dynamic(
  () => import("@/app/ui/industries/insuranceSector/InsuranceHeroSection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const InsuranceOurServices = dynamic(
  () => import("@/app/ui/industries/insuranceSector/InsuranceOurServices"),
  {
    loading: () => <DynamicLoader />,
  }
);
const InsuraceChooseUs = dynamic(
  () => import("@/app/ui/industries/insuranceSector/InsuranceChooseUs"),
  {
    loading: () => <DynamicLoader />,
  }
);
const InsuranceContactUs = dynamic(
  () => import("@/app/ui/industries/insuranceSector/InsuranceContactUs"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Insurance IT Enhancements - Vionsys IT Solutions India",
  description:
    "Our comprehensive offerings for the insurance industry include AI-enabled risk analysis, fraud detection & data analytics. where we help you compete in business.",
  alternates: {
    canonical: `${BaseUrl}/industries/insurance`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We specialize in innovative IT services for the insurance industry, delivering solutions such as automated claims processing, risk management, and personalized customer insights. Our advanced technology, including AI, data analytics, and a secure cloud platform, helps you improve your performance and increase customer satisfaction. With Vionsys, you can effortlessly streamline business processes, mitigate risks, and adapt to changing regulations. Advance your insurance services with our customized strategies to gain a competitive advantage and edge in the dynamic insurance marketplace. Find out how Vionsys can empower your business to deliver better value and performance for your customers.",
  },
};

const Page = () => {
  return (
    <section className="overflow-x-hidden">
      {/* Hero Section */}
      <InsuranceHeroSection />
      {/* Our Services Section */}
      <InsuranceOurServices />
      {/* Why Choose Us */}
      <InsuraceChooseUs />
      {/* Partner with Vionsys Section */}
      <InsuranceContactUs />
    </section>
  );
};

export default Page;
