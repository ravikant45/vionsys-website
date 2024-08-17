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
  title: "Web Development Service",
  description:
    "Increase your internet visibility with Vionsys IT Solutions India Pvt Ltd's comprehensive web development services. Our skilled team specializes in designing responsive, user-friendly websites that are performance-optimized and built to increase interaction. From custom web apps to e-commerce solutions, we offer comprehensive services to meet your company's requirements. Choose Vionsys for unique web development that increases your digital footprint and success.",
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
      <ClientsServices/>
      <FaqSec />
      {/* CTA */}
      <section className="bg-gray-100">
        <ScheduleMeetAndContactCTA />
      </section>
    </main>
  );
};

export default Page;
