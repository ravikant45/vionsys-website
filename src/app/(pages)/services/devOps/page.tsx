import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

import ClientsServices from "@/utils/ClientsServices";

import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/services/devops/Hero"), {
  loading: () => <DynamicLoader />,
});
const Keyfeatures = dynamic(
  () => import("@/app/ui/services/devops/Keyfeatures"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Workflow = dynamic(() => import("@/app/ui/services/devops/Workflow"), {
  loading: () => <DynamicLoader />,
});
const Faq = dynamic(() => import("@/app/ui/services/devops/Faq"), {
  loading: () => <DynamicLoader />,
});
const ScheduleMeetAndContactCTA = dynamic(
  () => import("@/utils/ScheduleMeetAndContactCTA"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Pune's Best IT Solution Services - DevOps Software Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd will guide you in developing and providing operational services. We can help transform your business. You can rely on us.",
  alternates: {
    canonical: `${BaseUrl}/services/devOps`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides experienced DevOps services that bridge the gap between development and operations, resulting in a seamless and effective workflow. Our solutions include infrastructure automation, monitoring, and continuous delivery, all designed to increase your team's productivity and reduce downtime. Partner with us to implement industry-leading processes and solutions, improving your IT operations and increasing agility.",
  },
};

const Page: React.FC = () => {
  return (
    <div id="gradient" className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Hero />
        <Keyfeatures />
        <Workflow />
        <ClientsServices />
        <Faq />
        <section className="bg-gray-100">
          <ScheduleMeetAndContactCTA />
        </section>
      </main>
    </div>
  );
};

export default Page;
