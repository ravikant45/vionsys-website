import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

import ClientsServices from "@/utils/ClientsServices";

import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const Firstsection = dynamic(
  () => import("@/app/ui/services/crm/Firstsection"),
  {
    loading: () => <DynamicLoader />,
  }
);
const Empower = dynamic(() => import("@/app/ui/services/crm/Empower"), {
  loading: () => <DynamicLoader />,
});
const Img = dynamic(() => import("@/app/ui/services/crm/Img"), {
  loading: () => <DynamicLoader />,
});
const Importance = dynamic(() => import("@/app/ui/services/crm/Importance"), {
  loading: () => <DynamicLoader />,
});
const CRMFaq = dynamic(() => import("@/app/ui/services/CRMFaq"), {
  loading: () => <DynamicLoader />,
});
const ScheduleMeetAndContactCTA = dynamic(
  () => import("@/utils/ScheduleMeetAndContactCTA"),
  {
    loading: () => <DynamicLoader />,
  }
);


export const metadata: Metadata = {
  title: "Customer Relationship Management Services",
  alternates: {
    canonical: `${BaseUrl}/services/crm`,
  },
};

const Page: React.FC = () => {
  return (
    <div className="pt-16 overflow-x-hidden relative">
      <Firstsection />
      <Empower />
      <Img />
      <Importance />
      <ClientsServices/>
      <CRMFaq />
      {/* Contact us and schedule a meet section */}
      <ScheduleMeetAndContactCTA />
    </div>
  );
};

export default Page;
