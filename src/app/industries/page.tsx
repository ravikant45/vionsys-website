import React from "react";
import FirstSection from "../ui/industries/FirstSection";
import SecondSection from "../ui/industries/SecondSection";
import ThirdSection from "../ui/industries/ThirdSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
};

const page = () => {
  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Second Section */}
      <SecondSection />
      {/* First Section */}
      <FirstSection />
      {/* Third Section */}
      <ThirdSection />
      
    </div>
  );
};

export default page;
