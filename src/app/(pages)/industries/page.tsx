import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const FirstSection = dynamic(() => import("../../ui/industries/FirstSection"), {
  loading: () => <p>Loading...</p>,
});
const SecondSection = dynamic(() => import("../../ui/industries/SecondSection"), {
  loading: () => <p>Loading...</p>,
});
const ThirdSection = dynamic(() => import("../../ui/industries/ThirdSection"), {
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: "Industries",
  description:"Vionsys IT Solutions Pvt Ltd provides customized technology solutions to a wide range of industries, including healthcare and finance. Our expertise in industry-specific IT encourages innovation, increases efficiency, and assures compliance, allowing firms to prosper in competitive marketplaces.",
  openGraph:{
    images:"/opangraph.png",
    description:"Explore Vionsys IT Solutions Pvt Ltd industry-specific services. We provide specialized IT solutions for sectors such as retail, manufacturing, and healthcare, assuring optimal operations and a competitive advantage through innovative technology and skilled support."
  }
};

const page = () => {
  return (
    <div className="pt-16 overflow-x-hidden">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default page;
