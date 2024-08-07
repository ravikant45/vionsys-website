import { BaseUrl } from "@/app/sitemap";
import AlMLCards from "@/app/ui/services/AlMLCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ML and AI Services",
  description: "Vionsys IT Solutions India Pvt Ltd offers cutting-edge Machine Learning and AI services that can transform your organization. Our team of professionals provides unique solutions that use AI to automate operations, improve decision-making, and drive growth. From predictive analytics to custom AI models, we offer tailored services to fit your specific requirements. Today, use our powerful ML and AI solutions to propel your organization forward. ",
  alternates: {
    canonical: `${BaseUrl}/services/ML-AI`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "Vionsys IT Solutions India Pvt Ltd provides superior AI and Machine Learning services that can catapult your company into the future. Our comprehensive solutions include AI-powered analytics, intelligent automation, and personalized machine learning models that increase productivity and stimulate innovation. Partner with us to obtain a competitive advantage by leveraging our cutting-edge AI and ML technology. "
  }
};
const page = () => {
  return (
    <AlMLCards />
  );
};

export default page;
