import React from "react";
import Conts from "../ui/contact/FirstSection";
import Second from "../ui/contact/SecondSection";
import ThirdSection from "../ui/contact/ThirdSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};
const page = () => {
  return (
    <div>
      <Conts />
      <Second />
      <ThirdSection />
    </div>
  );
};

export default page;
