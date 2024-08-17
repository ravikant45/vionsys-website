import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

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
  title: "Salesforce Services",
  description:
    "Maximize your company's potential with Vionsys IT Solutions India Pvt Ltd's complete Salesforce services. Our certified Salesforce experts provide specialized solutions, including implementation, modification, and integration, to help you optimize your business processes and improve customer connections. Whether you want to improve your sales, service, or marketing, Vionsys can alter your Salesforce platform to deliver exceptional outcomes.",
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
      <Future />
      <Cloud />
      <Provide />
      <ScheduleMeetAndContactCTA />
    </div>
  );
};

export default Salesforce;
