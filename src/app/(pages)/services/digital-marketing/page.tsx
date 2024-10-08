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
  title: "Digital Marketing Services",
  description:
    "Increase your online presence and drive growth with Vionsys IT Solutions India Pvt Ltd's comprehensive digital marketing services. Our skilled team offers customized techniques such as SEO, social media marketing, pay-per-click advertising, and content marketing to enhance traffic and conversions. Partner with Vionsys to enhance your brand and create measurable outcomes with our focused, data-driven digital marketing solutions.",
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
