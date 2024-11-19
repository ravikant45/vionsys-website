import dynamic from "next/dynamic";
import React from "react";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Herosection = dynamic(
  () => import("@/app/ui/industries/construction/Herosection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const SecondSection = dynamic(
  () => import("@/app/ui/industries/construction/SecondSection"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Best Tech-Driven Construction Solutions in Pune, Kharadi",
  description:
    "Vionsys IT Solutions provides the best services in the construction industry. With us, you can improve productivity & reduce cost & stay with the top trends.",
  alternates: {
    canonical: `${BaseUrl}/industries/construction`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We deliver sophisticated IT services tailored to the construction industry, including digital project management, IoT integration and data-driven analytics. Our solutions streamline operations, optimize resource management and provide seamless communication between teams. With Vionsys, you can modernize production processes, ensure safety compliance, and optimize project timelines. Find out how our advanced technologies can help you manage complex projects, reduce operating costs and maintain a competitive edge in manufacturing. Use our expertise to maximize success and innovation in your manufacturing process.",
  },
};

const Page = () => {
  return (
    <div id="gradient" className="pt-8 overflow-hidden">
      <Herosection />
      <SecondSection />
    </div>
  );
};

export default Page;
