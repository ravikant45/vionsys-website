import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/industries/pharma/Hero"), {
  loading: () => <DynamicLoader />,
});
const Services = dynamic(() => import("@/app/ui/industries/pharma/Services"), {
  loading: () => <DynamicLoader />,
});
const CTA = dynamic(() => import("@/app/ui/industries/pharma/CTA"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Pharma Industry Tech Experts",
  description:
    "Open innovation in the pharma industry with Vionsys IT Solutions. Our core services empower pharmaceutical companies through cutting-edge technology solutions such as AI-driven drug discovery, cloud-based data, and advanced analytics. We streamline R&D processes, ensure compliance with industry regulations, and improve supply chain efficiency. By leveraging our expertise, you can increase productivity, improve patient outcomes, and compete in a rapidly evolving market. Count on Vionsys to deliver digital solutions tailored to seamlessly integrate the unique challenges of the pharmaceutical industry, helping you deliver breakthrough medicines with reliability and accuracy.",
  alternates: {
    canonical: `${BaseUrl}/industries/pharma`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We offer comprehensive IT services tailored to the pharma industry, including clinical trial management, regulatory compliance solutions, and real-time data analytics. Our innovative technologies support efficient research, development, and distribution processes, driving better patient outcomes. With a focus on data security and compliance, Vionsys ensures your business meets industry standards while maximizing operational efficiency. Partner with us to leverage advanced technology for drug discovery, streamline supply chains, and transform your pharma operations. Discover how Vionsys IT Solutions can help you achieve success in the competitive pharmaceutical landscape.",
  },
};

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Our Services */}
      <Services />

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Page;
