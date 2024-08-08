import Hero from "@/app/ui/industries/itDigital/Hero";
import OurApproach from "@/app/ui/industries/itDigital/OurApproach";
import CTA from "@/app/ui/industries/itDigital/CTA";
import { Metadata } from "next";
import { BaseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Elevate IT with Digital Transformation ",
  description: "Our IT Digital Transformation services leverage cutting-edge technologies like AI, IoT, and cloud solutions to enhance efficiency and drive growth. We tailor strategies to your needs, modernizing operations and improving customer experience. Partner and compete with us to open up new opportunities in a digital-first world. Embrace innovation with Vionsys IT Solutions and lead your business into the future through seamless technology integration.",
  alternates: {
    canonical: `${BaseUrl}/industries/itDigital`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "We specialize in harnessing advanced technologies such as AI, cloud computing and data analytics to increase productivity and innovation. Our customized strategies align with your objectives, ensuring a smooth transition to a digitally leading environment. Enhance customer experience and stay ahead of the competitive market with our expert solutions. Discover the power of digital transformation at Vionys IT Solutions today"
  }
};
const page = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Our Approach */}
        <OurApproach />

        {/* CTA */}
        <CTA />
      </div>
    </>
  );
};

export default page;
