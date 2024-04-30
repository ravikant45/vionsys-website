import React from "react";
import AboutUs from "../ui/about/AboutUs";
import About2 from "../ui/about/About2";
import ThreeDCard from "../ui/about/ThreeDCard";
import Visit from "../ui/about/Visit";
import { TypewriterDemo } from "../ui/about/TypeWriterDemo";
import Testimonial from "../ui/about/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <div className="pt-16 pb-20">
      <AboutUs />
      <About2 />
      <ThreeDCard />
      <Testimonial />
      <TypewriterDemo />
      <Visit />
    </div>
  );
};

export default page;
