import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/services/testingservice/Hero"), {
  loading: () => <DynamicLoader />,
});
const Chooseus = dynamic(
  () => import("@/app/ui/services/testingservice/Chooseus"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Ourservices = dynamic(
  () => import("@/app/ui/services/testingservice/Ourservices"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Implementation = dynamic(
  () => import("@/app/ui/services/testingservice/Implementation"),
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
  title: "Testing Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd provides complete Testing and Quality Assurance (QA) services to ensure the reliability and performance of your software. Our skilled team provides comprehensive testing solutions, ranging from functional and performance testing to security and usability tests. Partner with us for comprehensive testing that finds and addresses issues early on, ensuring the success of your product. Choose Vionsys for reliable quality.",
  alternates: {
    canonical: `${BaseUrl}/services/testing`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd specializes in offering top-tier testing and quality assurance (QA) services to ensure the delivery of flawless software solutions. Our stringent testing techniques, which include automation, manual, and regression testing, ensure that your apps work well under any conditions. Protect your company's reputation with our complete QA services, which reduce risks and improve software quality.",
  },
};

const Page: React.FC = () => {
  return (
    <main className="pt-16 overflow-x-hidden">
      <Hero />
      <Chooseus />
      <Ourservices />
      <Implementation />
      {/* Schedule a meet and contact us */}
      <ScheduleMeetAndContactCTA />
    </main>
  );
};

export default Page;
