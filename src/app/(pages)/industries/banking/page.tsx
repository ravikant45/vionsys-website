import dynamic from "next/dynamic";
import React from "react";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/industries/Bankingservice/Hero"), {
  loading: () => <DynamicLoader />,
});
const Ourservice = dynamic(
  () => import("@/app/ui/industries/Bankingservice/Ourservice"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Cta = dynamic(() => import("@/app/ui/industries/Bankingservice/Cta"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Kharadi's Best IT Company - Secure IT for Banking Sector",
  description:
    "India's leading company where Banking Services combine advanced technologies including AI, blockchain & cloud solutions that increase efficiency and security.",
  alternates: {
    canonical: `${BaseUrl}/industries/banking`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Our expertise in the banking industry includes robust cybersecurity measures, AI-driven analytics and digital transformation solutions that increase operational efficiency. From mobile banking solutions to advanced fraud detection, we provide customized solutions to meet your organization's unique needs Ensure compliance, strengthen customer engagement, and you generate innovation with our cutting-edge technology. Count on Vionsys to provide seamless integration and support as you navigate the complexities of the banking industry. Empower your bank to succeed in a digital-first world and offer exceptional services to your customers. ",
  },
};

const Page = () => {
  return (
    <div className="pt-18 overflow-x-hidden">
      <Hero />
      <Ourservice />
      <Cta />
    </div>
  );
};

export default Page;
