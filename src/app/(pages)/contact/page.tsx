import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Conts = dynamic(() => import("../../ui/contact/FirstSection"), {
  loading: () => <DynamicLoader />,
});
const ThirdSection = dynamic(() => import("../../ui/contact/ThirdSection"), {
  loading: () => <DynamicLoader />,
});
const Countries = dynamic(() => import("../../ui/about/Countries"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Contact us to get Best IT Software Development Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd is here to help you with your inquiries. Contact us today to talk about company needs and how we can help you achieve.",
  alternates: {
    canonical: `${BaseUrl}/contact`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions Pvt Ltd offers experienced IT assistance and solutions. Whether you have questions or need a consultation, our team is available to help you. Contact us right away to find out how we can help your business with technology.",
  },
};
const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Conts />
      <Countries />
      <ThirdSection />
    </div>
  );
};

export default page;
