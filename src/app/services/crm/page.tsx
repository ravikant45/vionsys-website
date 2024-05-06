import Image from "next/image";
import Empower from "@/app/ui/crm/Empower";
import Importance from "@/app/ui/crm/Importance";
import CRM from "../../../../public/assets/services/crm/CRM.png";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { Metadata } from "next";
import CRMFaq from "@/app/ui/services/CRMFaq";
import CRMF from "/public/assets/services/crm/CRMH.jpg";
export const metadata: Metadata = {
  title: "Customer Relationship Management Services",
};
const Page: React.FC = () => {
  return (
    <div className="pt-16 overflow-x-hidden relative">
      <div className="bg-black relative">
        <Image src={CRMF} alt='' className="md:w-[100vw] h-[100vh] opacity-45" quality={100}/>
        <div className="absolute md:top-48 top-10 px-3 flex justify-center items-center flex-col transform text-white">
        <h1 data-aos="fade-left" className="text-3xl text-white font-extrabold">
            Customer Relationship Management (CRM)
          </h1>
          <h3
            data-aos="fade-right"
            className="text-md py-1 text-white pb-4 italic"
          >
            Selecting Excellence: Elevate Your CRM Experience with Us.
          </h3>
          <p data-aos="fade-down" className="text-paragraph text-white py-8">
            Discover CRM excellence with our innovative methodology, blending
            precision and innovation for unparalleled success. Seamlessly
            integrating technology and data-driven insights, we propel
            businesses to enduring triumphs and elevate customer journeys.
            Experience the pinnacle of effective work, meticulously designed for
            sustained growth and unmatched satisfaction.
          </p>
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
