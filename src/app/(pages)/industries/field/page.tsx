import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/industries/field/Hero"), {
  loading: () => <DynamicLoader />,
});
const Service = dynamic(() => import("@/app/ui/industries/field/Service"), {
  loading: () => <DynamicLoader />,
});
const Cta = dynamic(() => import("@/app/ui/industries/field/Cta"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Kharadi's Best IT Services - Field Services IT Advancements",
  description:
    "We are leading in the services of the field in Industry. Vionsys IT Solutions India Pvt Ltd can manage better content & reduce response time on vibrant field.",
  alternates: {
    canonical: `${BaseUrl}/industries/field`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We provide comprehensive IT services tailored to field operations, including mobile apps, IoT integration, and cloud-based solutions. Our technology improves labor management, optimizes logistics, and enhances real-time data processing for field technicians. By making work easier and providing intensive training and support, we help you improve your business and increase customer satisfaction. Partner with Vionsys to modernize your field operations, reduce operating costs, and stay ahead in a competitive market. Benefit from our innovative solutions designed to drive growth and operational efficiencies in our field.",
  },
};

const Page = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Service />
      <Cta />
    </div>
  );
};

export default Page;
