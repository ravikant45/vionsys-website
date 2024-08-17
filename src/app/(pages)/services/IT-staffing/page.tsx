import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

import ClientsServices from "@/utils/ClientsServices";

import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/services/ITStaffing/Hero"), {
  loading: () => <DynamicLoader />,
});
const Services = dynamic(
  () => import("@/app/ui/services/ITStaffing/services"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Choose = dynamic(() => import("@/app/ui/services/ITStaffing/choose"), {
  loading: () => <DynamicLoader />,
});
const ScheduleMeetAndContactCTA = dynamic(
  () => import("@/utils/ScheduleMeetAndContactCTA"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "IT Staffing",
  description:
    "Enhance your team with Vionsys IT Solutions India Pvt Ltd's extensive IT staffing services. We offer bespoke solutions to match your specific requirements, whether you are seeking for temporary, contract-to-hire, or permanent IT workers. Our wide network and skills ensure that you hire the best people to propel your organization forward. Partner with Vionsys for dependable and effective IT staffing that boosts your workforce skills.",
  alternates: {
    canonical: `${BaseUrl}/services/IT-staffing`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides experienced IT staffing services that match you with top-tier technical specialists. From software developers and network engineers to project managers and data analysts, we provide competent expertise that corresponds with your company's aims. Our flexible staffing solutions allow you to swiftly and efficiently scale your workforce, ensuring that your projects are finished on time and within budget. Trust Vionsys to satisfy your IT workforce requirements with excellence.",
  },
};

const Page: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <ClientsServices/>
      <Choose />
      {/* CTA */}
      <section className="bg-gray-100">
      <ScheduleMeetAndContactCTA />
      </section>
    </div>
  );
};

export default Page;
