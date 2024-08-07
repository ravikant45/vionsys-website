import Empower from "@/app/ui/services/crm/Empower";
const Img = dynamic(() => import("../../../ui/services/crm/Img"), {
  loading: () => <p>Loading...</p>,
});
import Importance from "@/app/ui/services/crm/Importance";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { Metadata } from "next";
import CRMFaq from "@/app/ui/services/CRMFaq";
import dynamic from "next/dynamic";
import { BaseUrl } from "@/app/sitemap";
import Firstsection from "@/app/ui/services/crm/Firstsection";
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
      <CRMFaq />
      {/* Contact us and schedule a meet section */}
      <ScheduleMeetAndContactCTA />
    </div>
  );
};

export default Page;
