import React from "react";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import Index from "@/app/ui/services/Index";

export const metadata: Metadata = {
  title: "Innovative IT Services to Accelerate Your Growth",
  description:
    "Boost your business with cutting-edge IT solutions from Vionsys IT Solutions. We specialize in digital innovations that enhance efficiency, security, and scalability. Let's build the future together!",
  keywords: [
    "Service",
    "software development service",
    "digital marketing service",
    "end-to-end service",
    "IT Service",
    "DevOps service",
    "IT Staffing Service",
  ],
  alternates: {
    canonical: `${BaseUrl}/services`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Power your business with cutting-edge IT solutions from Vionsys IT Solutions. We specialize in innovative digital services to drive growth, efficiency, and success.",
  },
};
const Services = () => {
  return (
    <main className="pt-16 overflow-x-hidden">
      <Index />
    </main>
  );
};

export default Services;
