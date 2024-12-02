import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/industries/itDigital/Hero"), {
  loading: () => <DynamicLoader />,
});
const OurApproach = dynamic(
  () => import("@/app/ui/industries/itDigital/OurApproach"),
  {
    loading: () => <DynamicLoader />,
  }
);
const CTA = dynamic(() => import("@/app/ui/industries/itDigital/CTA"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "IT Digital Transformation Services - Vionsys IT Solutions",
  description:
    "Explore IT Digital services with Vionsys IT Solutions India Pvt Ltd. We modernize operations and enhance customers' experience by customizing strategies.",
  alternates: {
    canonical: `${BaseUrl}/industries/itDigital`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We specialize in harnessing advanced technologies such as AI, cloud computing, and data analytics to increase productivity and innovation. Our customized strategies align with your objectives, ensuring a smooth transition to a digitally leading environment. Enhance customer experience and stay ahead of the competitive market with our expert solutions. Discover the power of digital transformation at Vionsys IT Solutions today.",
  },
};

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Our Approach */}
      <OurApproach />

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Page;
