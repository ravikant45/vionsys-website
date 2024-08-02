import Image from "next/image";
import Empower from "@/app/ui/crm/Empower";
const Img = dynamic(() => import("../../../ui/crm/Img"), {
  loading: () => <p>Loading...</p>,
});
import Importance from "@/app/ui/crm/Importance";
import ScheduleMeetAndContactCTA from "@/utils/ScheduleMeetAndContactCTA";
import { Metadata } from "next";
import CRMFaq from "@/app/ui/services/CRMFaq";
import CRMF from "/public/assets/services/crm/CRMH.jpg";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: "Customer Relationship Management Services",
};
const Page: React.FC = () => {
  return (
    <div className="pt-16 overflow-x-hidden relative">
      <div className="bg-black relative">
        <Image src={CRMF} alt='' className="md:w-[100vw] md:h-[100vh] h-[60vh] sm:[50vh] opacity-45" quality={100} />
        <div className="absolute bottom-4 px-3 flex justify-center items-center flex-col gap-2 transform text-white">
          <h1 data-aos="fade-left" className="md:text-5xl text-xl text-white font-extrabold text-center">
            Customer Relationship Management (CRM)
          </h1>
          <h3
            data-aos="fade-right"
            className="text-white italic md:text-xl text-sm"
          >
            Selecting Excellence: Elevate Your CRM Experience with Us.
          </h3>
          <p data-aos="fade-down" className="md:text-xl text-sm text-white md:px-52 mmd:px-10 px-3 sm:px-20 text-center">
            Discover CRM excellence with our innovative methodology, blending precision and innovation for unparalleled success. Seamlessly integrating technology and data-driven insights, we propel businesses to enduring triumphs and elevate customer journeys. Experience the pinnacle of effective work, meticulously designed for sustained growth and unmatched satisfaction.
          </p>
        </div>
      </div>
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
