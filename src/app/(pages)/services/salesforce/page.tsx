import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

import ClientsServices from "@/utils/ClientsServices";

import DynamicLoader from "@/components/ui/DynamicLoader";
import SalesforceOfferings from "@/app/ui/services/salesforce/SalesforceOfferings";
import OverviewSection from "@/app/ui/services/salesforce/OverviewSection";
import WhyChooseUs from "@/app/ui/services/salesforce/WhyChooseUs";
import SalesforceConsults from "@/app/ui/services/salesforce/SalesforceConsults ";
import SalesforceCTA from "@/app/ui/services/salesforce/SalesforceCTA";
import SalesforceConsultant from "@/app/ui/services/salesforce/SalesforceConsultant";
import SalesforceSymptoms from "@/app/ui/services/salesforce/SalesforceSymptoms";
import FAQSection from "@/app/ui/services/salesforce/FAQSection";
import NavSection from "@/app/ui/services/salesforce/NavSection";
import ThirdSection from "@/app/ui/contact/ThirdSection";

// Dynamic imports for components
const Hero = dynamic(() => import("@/app/ui/services/salesforce/Hero"), {
  loading: () => <DynamicLoader />,
});
const Future = dynamic(() => import("@/app/ui/services/salesforce/future"), {
  loading: () => <DynamicLoader />,
});
const Cloud = dynamic(() => import("@/app/ui/services/salesforce/Cloud"), {
  loading: () => <DynamicLoader />,
});
const Provide = dynamic(() => import("@/app/ui/services/salesforce/Provide"), {
  loading: () => <DynamicLoader />,
});
const ScheduleMeetAndContactCTA = dynamic(
  () => import("@/utils/ScheduleMeetAndContactCTA"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Salesforce Services in Kharadi - Vionsys IT Solutions India",
  description:
    "Salesforce service is the core service of Vionsys IT Solution India Pvt. Ltd. Experts provide customized solutions that help implement, modify, and integrate.",
  alternates: {
    canonical: `${BaseUrl}/services/salesforce`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "With experienced Salesforce services from Vionsys IT Solutions India Pvt Ltd, you can transform your customer engagement and drive growth. We provide complete solutions, from Salesforce setup and customization to continuous support and maintenance. Our team guarantees that your Salesforce platform is fully matched with your business requirements, providing seamless integration and advanced analytics to improve performance. Experience the Vionsys edge with Salesforce solutions today.",
  },
};

const Salesforce: React.FC = () => {
  return (
    <div className="pt-10 overflow-x-hidden">
      <Hero />
      <NavSection />
      <OverviewSection />
      <SalesforceCTA />
      <SalesforceOfferings />
      <WhyChooseUs />
      <SalesforceConsultant />
      <SalesforceCTA />
      <SalesforceSymptoms />
      <SalesforceConsults />
      <FAQSection />
      <ThirdSection />
      
      {/* <Future />
      <ClientsServices />
      <Cloud />
      <Provide /> */}
      {/* <ScheduleMeetAndContactCTA /> */}
      
    </div>
  );
};

export default Salesforce;
