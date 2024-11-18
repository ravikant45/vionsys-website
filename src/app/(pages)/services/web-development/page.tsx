import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

import ClientsServices from "@/utils/ClientsServices";

import DynamicLoader from "@/components/ui/DynamicLoader";
import webdevServicesData from "@/app/ui/services/data/WebdevServicesData";

// Dynamic imports for components
const Firstsec = dynamic(
  () => import("../../../ui/services/webdevelopment/Firstsec"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Ourservices = dynamic(
  () => import("../../../ui/services/webdevelopment/Ourservices"),
  {
    loading: () => <DynamicLoader />,
  }
);
const FaqSec = dynamic(
  () => import("../../../ui/services/webdevelopment/faqSec"),
  {
    loading: () => <DynamicLoader />,
  }
);
const ScheduleMeetAndContactCTA = dynamic(
  () => import("@/utils/ScheduleMeetAndContactCTA"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Pune's Best Web Development Services - Vionsys IT Solutions",
  description:
    "Vionsys IT Solutions India Pvt Ltd provides the best website design & development services in India & globally, it will help to convert your ideas into reality.",
  alternates: {
    canonical: `${BaseUrl}/services/web-development`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides experienced web development services that help you turn your vision into a compelling online presence. We provide specialized web design, development, and maintenance services to help your website stand out in the competitive digital landscape. Our solutions include everything from front-end design to back-end integration, resulting in a seamless user experience. Collaborate with Vionsys to develop a website that increases traffic, engagement, and conversions.",
  },
};

const Page = () => {
  const data = webdevServicesData;

  return (
    <main className="pt-16 overflow-x-hidden">
      <Firstsec />
      <Ourservices />
      <ClientsServices />
      <FaqSec />
      {/* CTA */}
      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
    </main>
  );
};

export default Page;
