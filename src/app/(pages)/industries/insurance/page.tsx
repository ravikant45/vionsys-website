import React from "react";
import InsuranceHeroSection from "@/app/ui/industries/insuranceSector/InsuranceHeroSection";
import InsuraceChooseUs from "@/app/ui/industries/insuranceSector/InsuranceChooseUs";
import InsuranceContactUs from "@/app/ui/industries/insuranceSector/InsuranceContactUs";
import InsuranceOurServices from "@/app/ui/industries/insuranceSector/InsuranceOurServices";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";
export const metadata: Metadata = {
  title: "Insurance IT Enhancements  ",
  description: "Our comprehensive offerings for the insurance industry include AI-enabled risk analysis, fraud detection and data analytics. We provide customized solutions that simplify system administration, improve customer communication and ensure compliance. With our advanced cloud computing and cybersecurity strategies, you can protect sensitive information while being productive. Partner with Vionsys to drive innovation, reduce costs, and deliver exceptional customer experiences. Count on our expertise to transform your insurance business, helping you compete in a rapidly growing industry and better meet the needs of today’s insurers.",
  alternates: {
    canonical: `${BaseUrl}/industries/insurance`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "We specialize in innovative IT services for the insurance industry, delivering solutions such as automated claims processing, risk management and personalized customer insights. Our advanced technology, including AI, data analytics and a secure cloud platform, helps you improve your performance and increase customer satisfaction. With Vionsys, you can effortlessly streamline business processes, mitigate risks, and adapt to changing regulations. Advance your insurance services with our customized strategies to gain a competitive advantage and edge in the dynamic insurance marketplace. Find out how Vionsys can empower your business to deliver better value and performance for your customers. "
  }
};
const Page = () => {
  return (
    <section className="overflow-x-hidden">
      {/*     Hero Section 1 */}
      <InsuranceHeroSection />
      {/* Our Serives Section  */}
      <InsuranceOurServices />
      {/* Why Choosh us */}
      <InsuraceChooseUs />
      {/* Partner with Vionsys Section */}
      <InsuranceContactUs />
    </section>
  );
};

export default Page;
