import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic import for ServicesTemplateFour
const ServicesTemplateFour = dynamic(
  () => import("@/app/ui/services/ServicesTemplateFour"),
  {
    loading: () => <DynamicLoader />,
  }
);

export const metadata: Metadata = {
  title: "Digital Marketing Solutions and Services Provider in Kharadi",
  description:
    "Digital marketing services are one of the core services of Vionsys IT Solutions India Pvt. Ltd. Partner with us to turn your data into a significant asset.",
  alternates: {
    canonical: `${BaseUrl}/services/digital-marketing`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides experienced digital marketing solutions to assist your organization succeed in the digital arena. From search engine optimization and social media management to email marketing and online advertising, we offer comprehensive services that increase engagement and ROI. Trust our expert team to develop and implement a personalized digital marketing strategy that corresponds with your company's objectives and optimizes your online presence.",
  },
};

const Page: React.FC = () => {
  return (
    <div className="pt-16 overflow-x-hidden">
      <ServicesTemplateFour />
    </div>
  );
};

export default Page;
