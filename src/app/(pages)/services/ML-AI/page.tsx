import dynamic from "next/dynamic";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic import for AlMLCards
const AlMLCards = dynamic(() => import("@/app/ui/services/AlMLCards"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "Kharadi's No. 1 company that provides best ML & AI Services",
  description:
    "Vionsys IT Solutions India Pvt Ltd provides Machine Learning and AI services that can transform your company. Our solutions will grow your business forward.",
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
