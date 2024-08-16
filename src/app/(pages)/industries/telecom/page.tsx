import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/industries/telecom/Hero"), {
  loading: () => <DynamicLoader />,
});
const ChooseUs = dynamic(() => import("@/app/ui/industries/telecom/ChooseUs"), {
  loading: () => <DynamicLoader />,
});
const CTA = dynamic(() => import("@/app/ui/industries/telecom/CTA"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Telecommunications IT Services",
  description:
    "Our core services for the telecommunications sector include advanced network management, 5G services, and IoT integration to enhance connectivity and productivity. We offer innovative solutions such as AI-enabled customer insights, cybersecurity enhancements, and cloud-based services to keep improving rapidly in the field. With our customized platforms, your business can deliver a seamless communication experience, reduce operating costs, and ensure strong security. Count on Vionsys to transform the global communications landscape, enabling you to meet today’s demands and exceed customer expectations in a competitive digital communications environment.",
  alternates: {
    canonical: `${BaseUrl}/industries/telecom`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Our comprehensive IT solutions are designed to meet the unique challenges of the telecom industry, delivering cutting-edge technologies such as 5G, AI, and IoT. We specialize in network optimization, cybersecurity, and customer experience improvements to drive growth and efficiency. With our expert guidance, you can streamline operations, improve service delivery, and protect your business against emerging threats. Partner with Vionsys to implement advanced digital solutions, stay competitive, and deliver exceptional communications experiences that meet your customers’ evolving needs in the telecommunications industry.",
  },
};

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <ChooseUs />

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Page;
