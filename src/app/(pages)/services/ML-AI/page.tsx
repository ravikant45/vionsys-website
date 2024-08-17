import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic import for AlMLCards
const AlMLCards = dynamic(() => import("@/app/ui/services/AlMLCards"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "ML and AI Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd offers cutting-edge Machine Learning and AI services that can transform your organization. Our team of professionals provides unique solutions that use AI to automate operations, improve decision-making, and drive growth. From predictive analytics to custom AI models, we offer tailored services to fit your specific requirements. Today, use our powerful ML and AI solutions to propel your organization forward.",
  alternates: {
    canonical: `${BaseUrl}/services/ML-AI`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "Vionsys IT Solutions India Pvt Ltd provides superior AI and Machine Learning services that can catapult your company into the future. Our comprehensive solutions include AI-powered analytics, intelligent automation, and personalized machine learning models that increase productivity and stimulate innovation. Partner with us to obtain a competitive advantage by leveraging our cutting-edge AI and ML technology.",
  },
};

const Page: React.FC = () => {
  return <AlMLCards />;
};

export default Page;
