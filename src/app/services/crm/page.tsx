import Image from "next/image";
import Empower from "@/app/ui/crm/Empower";
import Importance from "@/app/ui/crm/Importance";
import CRM from "../../../../public/assets/services/crm/CRM.png";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { Metadata } from "next";
import CRMFaq from "@/app/ui/services/CRMFaq";
export const metadata: Metadata = {
  title: "Customer Relationship Management Services",
};
const Page: React.FC = () => {
  return (
    <div className="pt-16 overflow-x-hidden relative">
      <div className="grid overflow-x-hidden md:grid-cols-2 md:px-6 px-2 py-4 grid-cols-1 bg-slate-100 justify-items-center items-center">
        <div className="md:px-4 px-2">
          <h1 data-aos="fade-left" className="text-2xl text-orange font-bold">
            Customer Relationship Management (CRM)
          </h1>
          <h3
            data-aos="fade-right"
            className="text-sm py-1 text-gray1 pb-4 italic"
          >
            Selecting Excellence: Elevate Your CRM Experience with Us.
          </h3>
          <p data-aos="fade-down" className="text-sm text-black py-8">
            Discover CRM excellence with our innovative methodology, blending
            precision and innovation for unparalleled success. Seamlessly
            integrating technology and data-driven insights, we propel
            businesses to enduring triumphs and elevate customer journeys.
            Experience the pinnacle of effective work, meticulously designed for
            sustained growth and unmatched satisfaction.
          </p>
        </div>
        <div>
          <Image data-aos="zoom-in" src={CRM} alt="" width="800" height="800" />
        </div>
      </div>
      <Empower />
      <Importance />

      <CRMFaq />
      {/* Contact us and schedule a meet section */}
      <ScheduleMeetAndContactCTA />
    </div>
  );
};

export default Page;
