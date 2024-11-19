import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const EcomHeroSection = dynamic(
  () => import("@/app/ui/industries/eCommerceSector/ecomHeroSection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const EcomOurServices = dynamic(
  () => import("@/app/ui/industries/eCommerceSector/ecomOurServices"),
  {
    loading: () => <DynamicLoader />,
  }
);
const EcomContactUs = dynamic(
  () => import("@/app/ui/industries/eCommerceSector/ecomContactUs"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Kharadi's Best IT Services - Ecommerce Development Services",
  description:
    "Vionsys IT Solution offers professionalized tailored ecommerce services to small and medium size companies. Designed tools are used to increase sales engagement.",
  alternates: {
    canonical: `${BaseUrl}/industries/ecommerce`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We provide comprehensive services for the eCommerce segment, such as custom website and mobile app development, platform integration, and complex analytics. Our solutions are designed to enhance user experience, improve productivity, and secure communications. We use advanced fraud prevention tools and cloud-based scalability to help you meet the demands of today’s customers while earning your business. Find out how Vionsys can transform your eCommerce strategy, increase sales, and maintain a competitive edge in today’s fast-paced digital marketplace with our expert technology solutions.",
  },
};

const Page = () => {
  return (
    <section className="overflow-x-hidden">
      <EcomHeroSection />
      <EcomOurServices />
      <EcomContactUs />
    </section>
  );
};

export default Page;
