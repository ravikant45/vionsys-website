import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Conts = dynamic(() => import("../../ui/contact/FirstSection"), {
  loading: () => <p>Loading...</p>,
});
const Second = dynamic(() => import("../../ui/contact/SecondSection"), {
  loading: () => <p>Loading...</p>,
});
const ThirdSection = dynamic(() => import("../../ui/contact/ThirdSection"), {
  loading: () => <p>Loading...</p>,
});

export const metadata: Metadata = {
  title: "Contact Us",
};
const page = () => {
  return (
    <div>
      <Conts />
      <ThirdSection />
      <Second />
    </div>
  );
};

export default page;
