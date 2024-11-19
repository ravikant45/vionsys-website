import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Herosection = dynamic(
  () => import("@/app/ui/industries/finance/Herosection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const SecondSec = dynamic(
  () => import("@/app/ui/industries/finance/SecondSec"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Advanced IT for Finance Sector | Vionsys IT Solutions India",
  description:
    "Vionsys IT Solution India Pvt Ltd offers top-notch services in India for the financial sector. Partner with us to keep your company ahead of the competition.",
  alternates: {
    canonical: `${BaseUrl}/industries/finance`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We provide state-of-the-art IT solutions such as AI-powered fraud detection, real-time data analytics, and secure cloud infrastructure. Our customized processes increase operational efficiency and ensure compliance, helping you deliver an exceptional customer experience. Compete with our innovative solutions tailored to your unique needs. Trust Vionsys to transform your financial operations and embrace the future of technology with confidence and success.",
  },
};

const Page = () => {
  return (
    <div className="pt-10 overflow-hidden">
      <Herosection />
      <SecondSec />
    </div>
  );
};

export default Page;
