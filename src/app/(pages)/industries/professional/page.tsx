import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(
  () => import("@/app/ui/industries/Professionalservice/Hero"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Ourservices = dynamic(
  () => import("@/app/ui/industries/Professionalservice/Ourservices"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Cta = dynamic(
  () => import("@/app/ui/industries/Professionalservice/Cta"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Innovative IT for Professional Services",
  description:
    "Our customized IT solutions empower your organization to improve efficiency and innovation. We specialize in cloud computing, AI-driven analytics, cybersecurity, and process automation, offering tailored approaches to meet your specific needs. Increase productivity, streamline operations and grow with our team of experts. Whether you need to upgrade existing systems or implement new technologies, Vionsys provides the knowledge and support to succeed. Partner with us to transform your professional services firm to compete in a rapidly evolving business environment.",
  alternates: {
    canonical: `${BaseUrl}/industries/professional`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We provide comprehensive IT solutions tailored specifically to the needs of the professional industry, including legal, consulting, and audit. Our offerings include advanced data management, cloud solutions, cybersecurity, and AI-powered tools designed to enhance customer engagement and business efficiency. At Vionsys, you'll find a partner committed to innovation and success. Transform your firm’s capabilities and stay ahead of industry challenges with innovative technology solutions that improve and streamline operations. Discover how Vionsys can support your professional service journey today.",
  },
};

const Page = () => {
  return (
    <div className="pt-18 overflow-x-hidden">
      <Hero />
      <Ourservices />
      <Cta />
    </div>
  );
};

export default Page;
