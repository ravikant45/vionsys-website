import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import LifeAtVionsys from "../../ui/about/LifeAtVionsys";
import ISOLogo from "@/components/ui/ISOLogo";
import CeoDesk2 from "@/app/ui/about/CeoDesk2";
import { BaseUrl } from "@/app/sitemap";
import DynamicLoader from "@/components/ui/DynamicLoader";

// Dynamic imports for components
const AboutUs = dynamic(() => import("../../ui/about/AboutUs"), {
  loading: () => <DynamicLoader />,
});
const About2 = dynamic(() => import("../../ui/about/About2"), {
  loading: () => <DynamicLoader />,
});
const ThreeDCard = dynamic(() => import("../../ui/about/ThreeDCard"), {
  loading: () => <DynamicLoader />,
});
const Countries = dynamic(() => import("../../ui/about/Countries"), {
  loading: () => <DynamicLoader />,
});

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vionsys, a pioneering IT solutions provider, specializes in software development, cloud services, and cybersecurity. We provide innovative, scalable solutions designed to accelerate corporate growth and efficiency while providing sturdy, secure, and cutting-edge technology for a competitive advantage.",
  alternates: {
    canonical: `${BaseUrl}/about`,
  },
  openGraph: {
    images: "/opangraph.png",
    description:
      "We provide premium IT services such as custom software, cloud solutions, and cybersecurity. Our devoted staff provides organizations with innovative technologies, assuring a competitive advantage and operational efficiency. Vionsys offers transformational IT skills.",
  },
};

const page = () => {
  return (
    <div className="pt-16 overflow-x-hidden">
      <AboutUs />
      {/* <CeoDesk /> */}
      <About2 />
      <CeoDesk2 />
      <ThreeDCard />
      <LifeAtVionsys />
      <ISOLogo />
      <Countries />
    </div>
  );
};

export default page;
