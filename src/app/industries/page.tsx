import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const FirstSection = dynamic(() => import("../ui/industries/FirstSection"), {
  loading: () => <p>Loading...</p>,
});
const SecondSection = dynamic(() => import("../ui/industries/SecondSection"), {
  loading: () => <p>Loading...</p>,
});
const ThirdSection = dynamic(() => import("../ui/industries/ThirdSection"), {
  loading: () => <p>Loading...</p>,
});

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
